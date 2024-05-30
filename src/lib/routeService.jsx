import { route } from "@/routes/web";
import { mergeRoutes } from "./utils";
import { createBrowserRouter } from "react-router-dom";

export const routes =createBrowserRouter(mergeRoutes(route))
