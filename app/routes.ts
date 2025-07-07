import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [

    route("home", "routes/home.tsx", [
        index("routes/dashboard.tsx"),
        route("image", "routes/image.tsx"),
        route("form", "routes/form.tsx"),
        route("tic-tac-toe", "routes/tic-tac-toe.tsx"),
        route("new-home", "welcome/welcome/newHeader.tsx"),
        route("dashboard", "routes/newDashboard.tsx"),
    ]),
    

    route("route", "routes/route.tsx"),

    route("*", "routes/defaultRouter.tsx")
   
] satisfies RouteConfig;

