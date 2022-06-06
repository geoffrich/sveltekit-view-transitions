import { afterNavigate } from '$app/navigation';
import { getTransitionContext } from '$lib/utils/resource-context';
import { onDestroy } from 'svelte';

// Call this hook on this first page before you start the page transition.
// For Shared Element Transitions, you need to call the transition.start()
// method before the next page begins to render, and you need to do the
// Document Object Model (DOM) modification or setting of new shared
// elements inside the callback so that this hook returns the promise and
// defers to the callback resolve.
export const getPageTransitionTrigger = () => {
	const transitionStore = getTransitionContext();

	return () => {
		// Feature detection
		if (!document.createDocumentTransition) {
			return null;
		}

		const transition = document.createDocumentTransition();
		transition.start(async () => {
			await new Promise((resolver) => {
				transitionStore.set({ transition, resolver });
			});
		});
	};
};

// Call this hook on the second page. Inside the useEffect hook, you can
// refer to the actual DOM element and set them as shared elements with the
// transition.setElement() method. When the resolver function is called,
// the transition is initiated between the captured images and newly set
// shared elements.
export const pageTransition = () => {
	const transitionStore = getTransitionContext();
	let unsub;
	afterNavigate(() => {
		unsub = transitionStore.subscribe((transition) => {
			if (!transition) {
				return;
			}
			const { resolver } = transition;
			resolver();
		});
	});

	onDestroy(() => {
		unsub?.();
		transitionStore.set(null);
	});
};
