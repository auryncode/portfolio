import { lazy } from "react";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const ProjectList = lazy(() => import("@/pages/projects"));
const DetailProject = lazy(() => import("@/pages/projects/detail"));
const BlogList = lazy(() => import("@/pages/blogs"));
const DetailBlog = lazy(() => import("@/pages/blogs/detail"));
const Services = lazy(() => import("@/pages/services"));
const RootLayout = lazy(() => import("@/layouts/RootLayout"));

import { redirect } from "react-router-dom";
import Error from "@/pages/error";

export const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    loading: <div>Loading...</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        meta: { title: "Home", requiresAuth: false },
        loading: <div>Loading...</div>,
      },
      {
        path: "/source",
        loader: () => redirect("https://github.com/auryncode/portfolio"),
      },
      {
        path: "/about",
        element: <About />,
        meta: { title: "About", requiresAuth: false },
      },
      {
        path: "/projects",
        element: <ProjectList />,
        meta: { title: "Projects", requiresAuth: false },
      },
      {
        path: "projects/:slug",
        element: <DetailProject />,
        meta: { title: "Projects Detail", requiresAuth: false },
      },
      {
        path: "/blogs",
        element: <BlogList />,
        meta: { title: "Projects", requiresAuth: false },
      },
      {
        path: "blogs/:slug",
        element: <DetailBlog />,
        meta: { title: "Projects Detail", requiresAuth: false },
      },
      // {
      //   path: "/services",
      //   element: <Services />,
      //   meta: { title: "Services", requiresAuth: false },
      // },
    ],
  },
];
