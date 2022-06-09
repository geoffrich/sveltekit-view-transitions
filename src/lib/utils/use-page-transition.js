import { afterNavigate, beforeNavigate } from '$app/navigation';
import { getTransitionContext } from '$lib/utils/resource-context';

// Call this hook on this first page before you start the page transition.
// For Shared Element Transitions, you need to call the transition.start()
// method before the next page begins to render, and you need to do the
// Document Object Model (DOM) modification or setting of new shared
// elements inside the callback so that this hook returns the promise and
// defers to the callback resolve.
export const preparePageTransition = () => {
	const transitionStore = getTransitionContext();
	let unsub;

	// before navigating, start a new transition
	beforeNavigate(({ to }) => {
		unsub?.();

		// Feature detection
		if (!document.createDocumentTransition) {
			return;
		}

		const transitionKey = to.pathname;
		const transition = document.createDocumentTransition();
		transition.start(async () => {
			await new Promise((resolver) => {
				transitionStore.update((current) => ({
					...current,
					[transitionKey]: { transition, resolver }
				}));
			});
			transitionStore.update((current) => ({
				...current,
				[transitionKey]: null
			}));
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
