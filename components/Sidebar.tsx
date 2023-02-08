import React from "react";
import SidebarIcon from "./SidebarIcon";
import { HiHome, HiMail } from "react-icons/hi";
import { BsFillPersonFill, BsCodeSlash } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <nav className="flex flex-col bg-lightBlack gap-2 text-offWhite w-16 top-0 left-0 h-screen sticky">
      <SidebarIcon icon={<HiHome size={26} />} text={"Home"} />
      <SidebarIcon icon={<BsFillPersonFill size={26} />} text={"About"} />

      <SidebarIcon icon={<BsCodeSlash size={26} />} text={"Projects"} />
      <SidebarIcon icon={<HiMail size={26} />} text={"Contact"} />
    </nav>
  );
};