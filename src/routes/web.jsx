import App from "@/pages/home/App";
import ProjectListCard from "@/pages/projects";

export const route = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <App />,
  },
  {
    path: "/projects",
    element: <ProjectListCard />,
    children: [
      {
        path: ":slug",
        element: <App />,
      },
    ],
  },
];
