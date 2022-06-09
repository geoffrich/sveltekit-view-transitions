# sveltekit-shared-element-transitions-codelab

SvelteKit version of the [Shared Element Transitions Google CodeLab](https://codelabs.developers.google.com/create-an-instant-and-seamless-web-app#5). Only works in Chrome Canary with the documentTransition API flag enabled and may break at any time due to the API changing.

Bugs that I need to look into:

- layout shifting during transition
- sveltekit:prefetch causes the page to transition from the top-right corner instead. not sure why.
