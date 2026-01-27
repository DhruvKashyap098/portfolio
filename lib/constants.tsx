import { Home, User, Folder, Phone } from "lucide-react"

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home size={16} />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User size={16} />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <Folder size={16} />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <Phone size={16} />,
  },
]
