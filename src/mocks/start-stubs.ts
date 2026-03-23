import React from "react";

// Server function builder (chainable)
export const createServerFn = () => {
  const builder: Record<string, unknown> = {
    validator: () => builder,
    inputValidator: () => builder,
    handler: () => async () => {
      throw new Error("createServerFn not available in Storybook");
    },
  };
  return builder;
};

// TanStack Start server entry
export const createStart = () => ({});

// Cookie helpers
const cookieStore = new Map<string, string>();

export const setCookie = (name: string, value: string) => {
  cookieStore.set(name, value);
};

export const getCookie = (name: string) => cookieStore.get(name);

export const deleteCookie = (name: string) => {
  cookieStore.delete(name);
};

// Route tree stub
export const routeTree = {
  id: "__root__",
  path: "/",
  fullPath: "/",
  init: () => ({}),
} as Record<string, unknown>;

// Router stubs (for when @tanstack/react-start re-exports router APIs)
export const createRouter = (config?: Record<string, unknown>) =>
  ({
    navigate: () => {},
    state: {
      location: { pathname: "/", search: "", hash: "" },
    },
    ...config,
  }) as Record<string, unknown>;

export const createRootRoute = (config: Record<string, unknown>) => ({
  ...config,
  id: "__root__",
  path: "/",
  init: () => ({}),
});

export const createFileRoute = (path: string) => (config: Record<string, unknown>) => ({
  ...config,
  id: path,
  path,
  init: () => ({}),
});

export const useNavigate = () => (options: Record<string, unknown>) =>
  console.log("[Storybook] Navigate:", options);

export const useSearch = () => ({});

export const Link = ({
  to,
  children,
  ...props
}: {
  to: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}) => React.createElement("a", { href: to, ...props }, children);

export const Outlet = () => null;
export const HeadContent = () => null;
export const Scripts = () => null;
export const Navigate = () => null;

export const notFound = () => {
  throw new Error("Not found");
};

export const getRouter = () => createRouter({ routeTree });

// Server entry default export
const fetchHandler = async () => new Response("Storybook Mock", { status: 200 });

export { fetchHandler as fetch };

export default { fetch: fetchHandler };
