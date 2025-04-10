import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { getProjects } from "@/data/projects";
import { CodeXml, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailProject() {
  const { slug } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getProjects(slug).then((res) => setData(res));
  }, [slug]);
  return data ? (
    <>
      <AspectRatio
        ratio={19 / 9}
        className="bg-transparent relative overflow-hidden"
      >
        <img
          src={data.image}
          alt={data.title}
          className="absolute top-0 left-0 bg-cover"
        />
      </AspectRatio>
      <h1 className="text-2xl font-semibold my-4">{data.title}</h1>
      <p>{data.description}</p>
      <div className="flex gap-4 my-4">
        <Link
          target="_blank"
          to={data.sourceCode}
          className={`flex gap-1 ${
            !data.sourceCode && "hidden"
          } items-center underline hover:text-blue-600 hover:italic`}
        >
          <CodeXml size={16} />
          Source code
        </Link>
        <Link
          target="_blank"
          to={data.demo}
          className="flex gap-1 items-center underline hover:text-blue-600 hover:italic"
        >
          <ExternalLink size={16} />
          Live demo
        </Link>
      </div>
      <div className="">{data.detail}</div>
    </>
  ) : (
    <div className="flex gap-2 flex-col">
      <Skeleton className={"w-full sm:h-[30rem] h-44"} />
      <Skeleton className={"w-80 sm:h-8 h-6"} />
      <Skeleton className={"w-[60rem] h-4 sm:h-6"} />
      <div className="flex gap-4">
        <Skeleton className={"w-32 h-4 sm:h-6"} />
        <Skeleton className={"w-32 h-4 sm:h-6"} />
      </div>
      <Skeleton className={"w-full h-[10rem]"} />
    </div>
  );
}
