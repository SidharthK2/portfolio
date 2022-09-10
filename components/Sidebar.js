import React from "react";
import SidebarIcon from "./SidebarIcon";
import { HiHome, HiMail } from "react-icons/hi";
import { GrContact } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import {
  BsFillLightningFill,
  BsFillPersonFill,
  BsCodeSlash,
} from "react-icons/bs";

export default function SideBar() {
  return (
    //home abt proj cont
    <nav className="flex flex-col bg-sidebarBlack gap-2 text-offWhite w-16 top-0 left-0 h-screen fixed">
      <SidebarIcon icon={<HiHome size={26} />} text={"This is home"} />
      <SidebarIcon
        icon={<BsFillPersonFill size={26} />}
        text={"This is about"}
      />

      <SidebarIcon icon={<BsCodeSlash size={26} />} text={"This is projects"} />
      <SidebarIcon icon={<HiMail size={26} />} text={"This is contact"} />
    </nav>
  );
}
