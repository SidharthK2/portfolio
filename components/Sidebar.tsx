import React from "react";
import SidebarIcon from "./SidebarIcon";
import { HiHome, HiMail } from "react-icons/hi";
import { BsFillPersonFill, BsCodeSlash } from "react-icons/bs";

export const Sidebar = () => {
  return (
    <nav className="p-1 flex flex-col bg-gradient-to-b from-lighterBlack via-lightBlack to-sidebarBlack gap-2 text-offWhite w-16 top-0 left-0 max-h-screen sticky">
      <SidebarIcon icon={<HiHome size={26} />} text={"Home"} />
      <SidebarIcon icon={<BsFillPersonFill size={26} />} text={"About"} />

      <SidebarIcon icon={<BsCodeSlash size={26} />} text={"Projects"} />
      <SidebarIcon icon={<HiMail size={26} />} text={"Contact"} />
    </nav>
  );
};
