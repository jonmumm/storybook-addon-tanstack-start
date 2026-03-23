# storybook-addon-tanstack-start

Storybook addon that provides a Vite plugin to stub TanStack Start server-side imports. Use this alongside [`storybook-addon-tanstack-router`](https://github.com/jonmumm/storybook-addon-tanstack-router) to render TanStack Start components in Storybook without a server.

## Installation

```bash
pnpm add -D storybook-addon-tanstack-start storybook-addon-tanstack-router
```

## Setup

### 1. Add the Vite plugin to your Storybook config

```ts
// .storybook/main.ts
import { tanstackStartPlugin } from "storybook-addon-tanstack-start/plugin";

const config = {
  // ...
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tanstackStartPlugin()],
    });
  },
};
```

### 2. Add the preview decorator

```ts
// .storybook/preview.ts
export { decorators } from "storybook-addon-tanstack-start/preview";
```

### 3. Use in stories

```tsx
import { tanstackRouterParameters } from "storybook-addon-tanstack-start";

export default {
  title: "MyComponent",
  parameters: {
    tanstackRouter: tanstackRouterParameters({
      location: { path: "/dashboard" },
    }),
  },
};
```

## Plugin options

```ts
tanstackStartPlugin({
  // Additional module IDs to redirect to stubs
  additionalServerModules: ["~/lib/auth/server", "~/lib/billing/server"],
});
```

## What gets stubbed

The plugin intercepts and stubs:

- `@tanstack/react-start` and all sub-paths
- `@tanstack/start-server-core`
- `virtual:cloudflare`, `server-entry`, `worker-entry`
- `routeTree.gen` (when not from node_modules)
- Any modules listed in `additionalServerModules`

Stubs include: `createServerFn` (chainable builder), `createStart`, cookie helpers (`setCookie`, `getCookie`, `deleteCookie`), route tree stubs, router API stubs, and a mock server entry.

## License

MIT
