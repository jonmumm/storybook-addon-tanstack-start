// Storybook preview entry point.
//
// Router decorators (withTanStackRouter) come from the companion package
// storybook-addon-tanstack-router. Users should add BOTH packages' preview
// entries to their .storybook/preview.ts, or use the router addon directly:
//
//   import { decorators as routerDecorators } from 'storybook-addon-tanstack-router/preview'
//   export const decorators = [...routerDecorators]
//
// This addon focuses on the Vite plugin for server-side mocking — it does not
// provide its own Storybook decorators.

export const decorators: unknown[] = [];
