import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
  const titles = {
    "": "Home",
    "about": "About",
    "projects": "Projects",
    "blogs": "Blogs",
  };
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>
          {titles[pathname.split("/")[1]] ?? "Home"} |
          {import.meta.env.VITE_APP_NAME}
        </title>
      </Helmet>
      <ThemeProvider defaultTheme="system" storageKey="theme">
        <Navbar />
        <div className="container mt-4">
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
