import { setContext } from 'svelte';
import { writable, get } from 'svelte/store';

export const contextKey = 'resource';

export function initResourceContext() {
	const store = writable({ transition: null });
	console.log('init context', get(store));
	store.subscribe((val) => console.log('store updated', val));
	setContext(contextKey, store);
}
