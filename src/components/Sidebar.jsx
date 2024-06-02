import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { links } from "@/data/links";

export function Sidebar({ onOpenChange, open }) {
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
      </SheetContent>
    </Sheet>
  );
}
