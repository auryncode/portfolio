import { AspectRatio } from "@/components/ui/aspect-ratio";
import RootLayout from "@/layouts/RootLayout";
import { CodeXml, ExternalLink } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";

export default function DetailProject() {
  const data = useLoaderData();
  return (
    <RootLayout>
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
          className={`flex gap-1 ${!data.sourceCode && 'hidden'} items-center underline hover:text-blue-600 hover:italic`}
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
          Live demo{" "}
        </Link>
      </div>
      <div className="">{data.detail}</div>
    </RootLayout>
  );
}
