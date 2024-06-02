import App from "@/pages/home";
import ProjectList from "@/pages/projects";
import About from "@/pages/about";
import { redirect } from "react-router-dom";
import DetailProject from "@/pages/projects/detail";
import { projects } from "@/data/projects";
import Error from "@/pages/error";
import Equipments from "@/pages/equpments";

export const route = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/source",
    loader: () => {
      return redirect("https://github.com/auryncode/portfolio");
    },
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <ProjectList />,
  },
  {
    path: "projects/:slug",
    loader: ({ params }) => {
      return projects.find((project) => project.slug == params.slug);
    },
    element: <DetailProject />,
  },
  {
    path: "/equipments",
    element: <Equipments />,
  },
];
