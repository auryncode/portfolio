import { CodeXml, Fingerprint, Home, PenLine, Pickaxe,  } from "lucide-react";

export const links = [
    { href: "/", label: "home", icon: <Home size={20} /> },
    { href: "/about", label: "about", icon: <Fingerprint size={20} /> },
    { href: "/blog", label: "blog", icon: <PenLine size={20} /> },
    { href: "/projects", label: "projects", icon: <CodeXml size={20} /> },
    { href: "/equipments", label: "equipments", icon: <Pickaxe size={20} /> },
  ];