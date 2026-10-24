import type { RouteObject } from "react-router";
import Home from "../components/pages/Home";

const routes : RouteObject [] = [
    {
        path: "/",
        element: <Home />,
    }
];

export default routes;
