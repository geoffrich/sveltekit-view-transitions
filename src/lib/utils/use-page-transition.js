import { getContext, onMount } from 'svelte';
import { get } from 'svelte/store';
import { contextKey } from '$lib/utils/resource-context';

// Call this hook on this first page before you start the page transition.
// For Shared Element Transitions, you need to call the transition.start()
// method before the next page begins to render, and you need to do the
// Document Object Model (DOM) modification or setting of new shared
// elements inside the callback so that this hook returns the promise and
// defers to the callback resolve.
export const usePageTransitionPrep = () => {
	const transitionStore = getContext(contextKey);

	return (elm) => {
		const sharedElements = elm.querySelectorAll('.shared-element');
		// Feature detection
		if (!document.createDocumentTransition) {
			return null;
		}

		return new Promise((resolve) => {
			console.log('creating transition');
			const transition = document.createDocumentTransition();
			Array.from(sharedElements).forEach((elm, idx) => {
				elm.style.pageTransitionTag = `target-${idx}`;
				// transition.setElement(elm, `target-${idx}`);
			});
			transition.start(async () => {
				resolve();
				await new Promise((resolver) => {
					transitionStore.set({ transition: { transition, resolver } });
				});
			});
			console.log('transition started');
		});
	};
};

// Call this hook on the second page. Inside the useEffect hook, you can
// refer to the actual DOM element and set them as shared elements with the
// transition.setElement() method. When the resolver function is called,
// the transition is initiated between the captured images and newly set
// shared elements.
export const usePageTransition = (node) => {
	const transitionStore = getContext(contextKey);
	const unsub = transitionStore.subscribe(({ transition }) => {
		if (!transition) {
			return;
		}
		const { resolver } = transition;
		const sharedElements = node.querySelectorAll('.shared-element');
		Array.from(sharedElements).forEach((elm, idx) => {
			elm.style.pageTransitionTag = `target-${idx}`;
		});
		resolver();
	});

	return {
		destroy: () => {
			unsub();
			transitionStore.set({ transition: null });
		}
	};
};