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
