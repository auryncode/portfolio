import { Image } from "@/components/ui/image";
import { projects } from "@/data/projects";
import RootLayout from "@/layouts/RootLayout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectList() {
  return (
    <RootLayout>
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col justify-between hover:border shadow"
            style={{ width: "100%" }}
          >
            <div className="flex-1 relative">
              <Image
                onLoad={(e) => console.log(e)}
                src={project.image}
                alt="Project Image"
                className="object-cover w-full h-full"
              />
              <Link
                to={`/projects/${project.slug}`}
                className="w-full absolute top-0 left-0 h-full text-primary bg-secondary/50 flex items-center transition-all duration-300 opacity-0 group-hover:opacity-100 justify-center gap-2 group-hover:underline underline-offset-2"
              >
                <p className="group-hover:italic font-medium">View project</p>{" "}
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex-1 p-2 group-hover:bg-secondary">
              <h5 className="mb-2 font-semibold text-lg">{project.title}</h5>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
}
