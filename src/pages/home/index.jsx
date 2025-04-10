import { sosmed } from "@/data/sosmed";
import profile from "./../../assets/images/profile.webp";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { getProjects } from "@/data/projects";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogs } from "@/data/blogs";

export default function Home() {
  const [latestProjects, setLatestProjects] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState({});
  const [isLoadingProject, setIsLoadingProject] = useState(true);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);

  useEffect(() => {
    getProjects().then((data) => {
      setIsLoadingProject(false);
      setLatestProjects(data.slice(0, 2));
    });
    getBlogs().then((data) => {
      setIsLoadingBlog(false);
      setLatestBlogs(data.at(0));
    });
  }, []);
  return (
    <div className="flex gap-8 flex-wrap w-full h-full">
      <div className="sm:w-3/12 w-full h-full flex flex-col gap-6 p-8 border rounded-3xl">
        <div className="rounded-[4rem] w-full flex justify-center overflow-hidden">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold tracking-wider text-lg text-center">
            Heri Riyanto
          </h1>
          <p className="text-center text-sm">
            Programmer at Phicos Group, skilled in PHP, JavaScript, and
            React.js, delivering effective and scalable solutions.
          </p>
          <div className="flex w-full justify-center gap-4">
            {sosmed.map((sosmed, i) => (
              <Link
                key={i}
                target="_blank"
                aria-label={sosmed.name}
                to={sosmed.link}
              >
                <sosmed.icon className="size-7" />
              </Link>
            ))}
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold tracking-wider text-lg">Experience</h1>
          <ul className="list-decimal list-inside">
            <li className="">
              <div className="inline-flex flex-col">
                <p className="font-semibold">Sofware Engineer</p>
                <p className="text-xs text-muted-foreground">
                  Phicos Group / 2024 - Present
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Skill */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold tracking-wider text-lg">Skill</h1>
          <ul className="list-decimal list-inside">
            <li className="">
              <div className="inline-flex flex-col">
                <p className="font-semibold">React JS</p>
                <p className="text-xs text-muted-foreground">Expert</p>
              </div>
            </li>
            <li className="">
              <div className="inline-flex flex-col">
                <p className="font-semibold">Laravel</p>
                <p className="text-xs text-muted-foreground">Advanced</p>
              </div>
            </li>
            <li className="">
              <div className="inline-flex flex-col">
                <p className="font-semibold">SQL & No SQL</p>
                <p className="text-xs text-muted-foreground">Intermediate</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:w-8/12 w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold tracking-wider text-xl">Hi There</h1>
          <p className="hyphens-auto">
            Welcome! I’m <strong>Heri Riyanto</strong> a programmer at Phicos
            Group since 2024, specializing in developing applications with PHP
            (Laravel, CodeIgniter), JavaScript, and React.js. I focus on
            creating effective, scalable, and user-centered technical solutions.
            Passionate about continuous learning, I’m committed to delivering
            the best outcomes in every project I work on.
          </p>
        </div>
        {isLoadingProject && (
          <>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <Skeleton className={"w-40 h-8"} />
                <Skeleton className={"w-40 h-8"} />
              </div>
              <Skeleton className="w-full h-40 rounded-3xl" />
            </div>
          </>
        )}
        {latestProjects.length > 0 && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <h1 className="font-bold tracking-wider text-lg">
                Recent Projects
              </h1>
              <Link to="/projects">
                All Projects <ChevronRightIcon className="inline" />
              </Link>
            </div>
            {latestProjects.map((project, i) => (
              <div
                key={i}
                className="flex flex-col group relative rounded-3xl overflow-hidden border"
              >
                <div className="relative w-full h-36">
                  <img
                    loading="lazy"
                    alt={project.title}
                    src={project.image}
                    className="w-full h-full object-cover overflow-hidden"
                  />
                  {/* <div className="absolute w-full h-full bg-transparent group-hover:bg-gray-700 opacity-50"></div> */}
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <p className="line-clamp-1 text-sm text-muted-foreground group-hover:text-white">
                    {project.description}
                  </p>
                </div>
                <div className="absolute w-full h-full bg-transparent  dark:group-hover:bg-gray-600/50 group-hover:bg-slate-100/50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <Link
                    className="opacity-100 italic underline"
                    to={"/projects/" + project.slug}
                  >
                    Project Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoadingBlog && (
          <>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <Skeleton className={"w-40 h-8"} />
                <Skeleton className={"w-40 h-8"} />
              </div>
              <Skeleton className="w-full h-40 rounded-3xl" />
            </div>
          </>
        )}
        {latestBlogs && latestBlogs.title && (
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <h1 className="font-bold tracking-wider text-lg">Recent Blogs</h1>
              <Link to="/projects">
                All Blogs <ChevronRightIcon className="inline" />
              </Link>
            </div>
            <div className="flex flex-col group relative rounded-3xl overflow-hidden border">
              <div className="relative w-full h-36">
                <img
                  alt={latestBlogs.title}
                  loading="lazy"
                  src={latestBlogs.image}
                  className="w-full h-full object-cover overflow-hidden"
                />
                {/* <div className="absolute w-full h-full bg-transparent group-hover:bg-gray-700 opacity-50"></div> */}
              </div>
              <div className="p-4">
                <p className="font-semibold text-lg">{latestBlogs.title}</p>
                <p className="line-clamp-1 text-sm text-muted-foreground group-hover:text-white">
                  {latestBlogs.description}
                </p>
              </div>
              <div className="absolute w-full h-full bg-transparent  dark:group-hover:bg-gray-600/50 group-hover:bg-slate-100/50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <Link
                  className="opacity-100 italic underline"
                  to={"/blogs/" + latestBlogs.slug}
                >
                  Blog detail
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}