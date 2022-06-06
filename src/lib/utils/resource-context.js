import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

const contextKey = 'transition';

export function initTransitionContext() {
	const store = writable(null);
	setContext(contextKey, store);
}

export function getTransitionContext() {
	return getContext(contextKey);
}
