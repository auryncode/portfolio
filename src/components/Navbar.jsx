import { Link } from "react-router-dom";
import { AlignLeft, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useTheme } from "@/providers/ThemeProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { links } from "@/lib/links";


export default function Navbar() {
  const { setTheme } = useTheme();
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div className="shadow">
        <div className="flex justify-between py-4 container">
          <AlignLeft
            onClick={() => setShow(!show)}
            className="cursor-pointer sm:hidden"
          />
          <h1 className="hidden sm:block">Navbar</h1>
          <div className="hidden sm:flex space-x-4">
            {links.map((link, i) => (
              <Link key={i} to={link.href} className="capitalize font-medium">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="relative">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Moon
                    onClick={() => setTheme("dark")}
                    className="right-0 absolute scale-100 dark:scale-0 cursor-pointer"
                    size={24}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Dark Mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Sun
                    onClick={() => setTheme("light")}
                    className="right-0 absolute dark:scale-100 scale-0 cursor-pointer"
                    size={24}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Light Mode</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <Sidebar onOpenChange={() => setShow(!show)} open={show} />
    </div>
  );
}
