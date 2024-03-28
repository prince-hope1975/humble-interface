import * as Page from "./pages";
export const routes = [
  {
    path: "/",
    Component: Page.Home,
  },
  {
    path: "/swap",
    Component: Page.Swap,
  },
  {
    path: "/pool",
    Component: Page.Pool,
  },
  {
    path: "/pool/add",
    Component: Page.PoolAdd,
  },
  {
    path: "/pool/remove",
    Component: Page.PoolRemove,
  },
];
