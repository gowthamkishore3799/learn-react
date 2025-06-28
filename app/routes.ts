import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
    route("/home", "routes/home.tsx"),
    route("/image", "routes/image.tsx"),
    route("/form", "routes/form.tsx"),
    route("/tic-tac-toe", "routes/tic-tac-toe.tsx")
] satisfies RouteConfig;

