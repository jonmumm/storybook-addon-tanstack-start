// Export the Vite plugin
export { tanstackStartPlugin } from "./plugin.js";
export type { TanStackStartPluginOptions } from "./plugin.js";

// Re-export stubs for direct use
export {
  clearCookieStore,
  createFileRoute,
  createRootRoute,
  createRootRouteWithContext,
  createRouter,
  createServerFn,
  createStart,
  deleteCookie,
  getCookie,
  getRouter,
  HeadContent,
  Link,
  Navigate,
  notFound,
  Outlet,
  redirect,
  routeTree,
  Scripts,
  setCookie,
  useLoaderData,
  useLocation,
  useMatch,
  useMatches,
  useNavigate,
  useParams,
  useRouteContext,
  useRouter,
  useSearch,
} from "./mocks/start-stubs.js";
