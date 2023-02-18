import { beforeNavigate } from '$app/navigation';
import { navigating } from '$app/stores';
import { onDestroy } from 'svelte';

function getNavigationStore() {
	/** @type {((val?: any) => void)[]} */
	let callbacks = [];

	const navigation = {
		...navigating,
		complete: async () => {
			await new Promise((res, _) => {
				callbacks.push(res);
			});
		}
	};

	// This used to subscribe inside the callback, but that resolved the promise too early
	const unsub = navigating.subscribe((n) => {
		if (n === null) {
			while (callbacks.length > 0) {
				const res = callbacks.pop();
				res?.();
			}
		}
	});

	onDestroy(() => {
		unsub();
	});

	return navigation;
}

export const preparePageTransition = () => {
	const navigation = getNavigationStore();

	// before navigating, start a new transition
	beforeNavigate(() => {
		const navigationComplete = navigation.complete();
		transitionHelper({
			updateDOM: () => navigationComplete
		});
	});
};

/**
 * copied from Jake Archibald's explainer
 * https://developer.chrome.com/docs/web-platform/view-transitions/#not-a-polyfill
 * @returns {ViewTransition}
 */
function transitionHelper({ skipTransition = false, classNames = [], updateDOM }) {
	if (skipTransition || !document.startViewTransition) {
		const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {});

		return {
			ready: Promise.reject(Error('View transitions unsupported')),
			updateCallbackDone,
			finished: updateCallbackDone,
			skipTransition: () => {}
		};
	}

	document.documentElement.classList.add(...classNames);

	const transition = document.startViewTransition(updateDOM);

	transition.finished.finally(() => document.documentElement.classList.remove(...classNames));

	return transition;
}
