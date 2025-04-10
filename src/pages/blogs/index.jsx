import { Image } from "@/components/ui/image";
import { Skeleton } from "@/components/ui/skeleton";
import { getBlogs } from "@/data/blogs";
import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Blogs</h1>
        <p className="text-muted-foreground text-sm">
          Some of the blogs that I{"'"}ve written, not only about code.
        </p>
      </div>
      <div className="sm:columns-2 columns-1 lg:columns-3 space-y-4">
        {isLoading && <Skeleton className={"w-full sm:h-[50rem] h-72 rounded-3xl"} />}
        {blogs.map((item, i) => (
          <div
            key={i}
            className="group break-inside-avoid flex flex-col justify-between rounded-3xl border dark:border-gray-500 shadow"
            style={{ width: "100%" }}
          >
            <div className="flex-1 relative rounded-3xl overflow-hidden">
              <Image
                src={item.image}
                alt="Project Image"
                className="object-cover w-full h-full aspect-[6/4] sm:aspect-auto"
              />
              <Link
                to={`/blogs/${item.slug}`}
                className="w-full absolute top-0 left-0 h-full bg-secondary/50 flex items-center transition-all duration-300 opacity-0 group-hover:opacity-100 justify-center gap-2"
              >
                <div className="hidden sm:flex items-center justify-center flex-col p-2">
                  <h5 className="mb-2 font-bold text-2xl text-white">
                    {item.title}
                  </h5>
                  <p className="dark:text-white/80 text-center">
                    {item.description}
                  </p>
                </div>
                <p className="sm:hidden group-hover:italic underline">
                  Detail Project
                </p>
                <ChevronRightIcon className="sm:hidden" />
              </Link>
            </div>
            <div className="flex rounded-b-3xl flex-col p-2 sm:hidden text-center">
              <h5 className="mb-2 font-bold text-2xl dark:text-white">
                {item.title}
              </h5>
              <p className="dark:text-white/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
