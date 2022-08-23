import { beforeNavigate } from '$app/navigation';
import { navigating } from '$app/stores';
import { onDestroy } from 'svelte';
import reducedMotion from './reduced-motion';

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

/**
 * @callback pageTransitionCallback
 * @param {{ from: URL, to: URL, type: TransitionType}} nav
 */

const beforeCallbacks = new Set(); // before transition starts
const afterCallbacks = new Set(); // after transition has completed
const incomingCallbacks = new Set(); // when new page is loaded but transition has not completed

/**
 * @param {pageTransitionCallback} fn
 */
export const beforePageTransition = (fn) => {
	beforeCallbacks.add(fn);

	onDestroy(() => {
		beforeCallbacks.delete(fn);
	});
};

/**
 * @param {pageTransitionCallback} fn
 */
export const whileIncomingTransition = (fn) => {
	incomingCallbacks.add(fn);

	onDestroy(() => {
		incomingCallbacks.delete(fn);
	});
};

/**
 * @param {pageTransitionCallback} fn
 */
export const afterPageTransition = (fn) => {
	afterCallbacks.add(fn);

	onDestroy(() => {
		afterCallbacks.delete(fn);
	});
};

/**
 * @param {(from: string, to: string) => string?} getType
 */
export const preparePageTransition = (getType = (_from, _to) => null) => {
	const navigation = getNavigationStore();
	let isReducedMotionEnabled = false;

	let unsubReducedMotion = reducedMotion.subscribe((val) => (isReducedMotionEnabled = val));

	// before navigating, start a new transition
	beforeNavigate(({ from, to }) => {
		// Feature detection
		if (!document.createDocumentTransition || isReducedMotionEnabled) {
			return;
		}

		const type = getType(from.pathname, to?.pathname ?? '');
		try {
			const transition = document.createDocumentTransition();
			const payload = { from, to, type };
			beforeCallbacks.forEach((fn) => fn(payload));
			// init before transition.start so the promise doesn't resolve early
			const navigationComplete = navigation.complete();
			transition
				.start(async () => {
					await navigationComplete;
					incomingCallbacks.forEach((fn) => fn(payload));
				})
				.then(() => {
					afterCallbacks.forEach((fn) => fn(payload));
				});
		} catch (e) {
			// without the catch, we could throw in beforeNavigate and prevent navigation
			console.error(e);
		}
	});

	onDestroy(() => {
		unsubReducedMotion();
	});
};
