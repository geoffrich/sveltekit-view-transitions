import { afterNavigate, beforeNavigate } from '$app/navigation';
import { setContext, getContext, hasContext } from 'svelte';
import { writable } from 'svelte/store';

const contextKey = 'transition';

export function initTransitionContext() {
	if (hasContext(contextKey)) return getContext(contextKey);
	return setContext(contextKey, writable({}));
}

export function getTransitionContext() {
	if (!hasContext(contextKey)) {
		return initTransitionContext();
	}
	return getContext(contextKey);
}

// Call this hook on this first page before you start the page transition.
// For Shared Element Transitions, you need to call the transition.start()
// method before the next page begins to render, and you need to do the
// Document Object Model (DOM) modification or setting of new shared
// elements inside the callback so that this hook returns the promise and
// defers to the callback resolve.
export const preparePageTransition = () => {
	const transitionStore = getTransitionContext();
	let unsub;

	function updateStore(key, value) {
		transitionStore.update((current) => ({
			...current,
			[key]: value
		}));
	}

	// before navigating, start a new transition
	beforeNavigate(({ to }) => {
		unsub?.(); // clean up previous subscription

		// Feature detection
		if (!document.createDocumentTransition) {
			return;
		}

		const transitionKey = to.pathname;
		const transition = document.createDocumentTransition();
		transition.start(async () => {
			// set transition data for afterNavigate hook to pick up
			await new Promise((resolver) => {
				updateStore(transitionKey, { transition, resolver });
			});
			updateStore(transitionKey, null);
		});
	});

	afterNavigate(({ to }) => {
		const transitionKey = to.pathname;
		unsub = transitionStore.subscribe((transitions) => {
			const transition = transitions[transitionKey];
			if (!transition) {
				return;
			}
			const { resolver } = transition;
			resolver();
		});
	});
};
