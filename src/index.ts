// Export the Vite plugin
export { tanstackStartPlugin } from "./plugin.js";
export type { TanStackStartPluginOptions } from "./plugin.js";

// Re-export stubs for direct use
export {
  createServerFn,
  createStart,
  setCookie,
  getCookie,
  deleteCookie,
  routeTree,
  createRouter,
  createRootRoute,
  createFileRoute,
  useNavigate,
  useSearch,
  Link,
  Outlet,
  HeadContent,
  Scripts,
  Navigate,
  notFound,
  getRouter,
} from "./mocks/start-stubs.js";
