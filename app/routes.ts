import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("programming", "routes/programming.tsx"),
  route("cad", "routes/cad.tsx"),
  route("electrical", "routes/electrical.tsx"),
  route("mechanical", "routes/mechanical.tsx"),
  route("business", "routes/business.tsx"),
] satisfies RouteConfig;
