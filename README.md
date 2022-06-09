# sveltekit-shared-element-transitions

SvelteKit version of the [Shared Element Transitions Google CodeLab](https://codelabs.developers.google.com/create-an-instant-and-seamless-web-app#5). Only works in Chrome Canary with the `chrome://flags/#document-transition` flag enabled and may break at any time due to the API changing.

## Additional features

In porting this to Svelte, I also implemented some additional features.

- Also transition the fruit page heading, in addition to the image
- Transition _back_ to the list of fruits
- Respect reduced motion by not playing the transition if reduced motion is enabled
- Transition when the back/forward buttons are clicked (the original demo only used a link click as the trigger)

## Bugs

- layout shifts during transition
- sveltekit:prefetch causes the page to transition from the top-right corner instead. not sure why.
