# sveltekit-shared-element-transitions-codelab

SvelteKit version of the [Shared Element Transitions Google CodeLab](https://codelabs.developers.google.com/create-an-instant-and-seamless-web-app#5). Only works in Chrome Canary with the documentTransition API flag enabled and may break at any time due to the API changing.

TODO:

- optimize images
- stretch goal: transition back from fruit page
- remove React-isms (useX)
- clean up console logs
- layout shifting during transition
- instead of shared-element class, data- attributes?
- better way instead of having to register per-page -- possibly call prepare functions with {from, to} allowlist
