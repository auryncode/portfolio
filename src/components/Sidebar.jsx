import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { links } from "@/lib/links";

export function Sidebar({ onOpenChange, open }) {
  const { setTheme } = useTheme();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side={"left"}>
        <div className="flex flex-col">
          {links.map((link, i) => (
            <Link
              onClick={onOpenChange}
              key={i}
              to={link.href}
              className="capitalize font-semibold flex items-center gap-2 px-2 w-full py-3 mb-4 duration-150 hover:border bg-gray-100 dark:bg-slate-400/10"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-full absolute right-0 bottom-0 p-4 scale-100 dark:scale-0">
          <button onClick={()=>setTheme('dark')} className="right-0 flex gap-2 bg-gray-100 dark:bg-slate-400/10 w-full px-2 py-3 scale-100 dark:scale-0">
            <Moon size={24} />
            <p className="font-semibold">Dark</p>
          </button>
        </div>
        <div className="w-full absolute right-0 bottom-0 p-4 dark:scale-100 scale-0">
          <button onClick={()=>setTheme('light')} className="flex gap-2 bg-gray-100 dark:bg-slate-400/10 w-full px-2 py-3 dark:scale-100 scale-0">
            <Sun size={24} />
            <p className="font-semibold">Light</p>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
