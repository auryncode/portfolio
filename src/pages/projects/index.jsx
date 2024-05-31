import RootLayout from "@/layouts/RootLayout";
import { ChevronRight } from "lucide-react";

const ProjectListCard = () => {
    const images = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ];
    return (
        <RootLayout>
            <div className="flex flex-col gap-4">
                {images.map((image, i) => (
                    <div key={i} className="flex flex-col justify-between gap-4 hover:border shadow" style={{ width: "100%" }}>
                        <div className="flex-1 relative">
                            {/* Belum Dibuat Hover */}
                            <a href="/projects/detail-project" className="w-full absolute top-0 left-0 h-full bg-gray-900/50 flex items-center transition-all duration-300 justify-center text-white font-bold gap-2 hover:underline"><p className="hover:skew-x-10 ">View project</p> <ChevronRight size={16} /></a>
                            <img src={image} alt="Project Image" className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1 p-2">
                            <h5 className="mb-2">Project Title</h5>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </RootLayout>
    );
};

export default ProjectListCard;
