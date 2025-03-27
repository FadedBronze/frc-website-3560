import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("programming", "routes/programming.tsx"),
] satisfies RouteConfig;
