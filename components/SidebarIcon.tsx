import React from "react";
import Link from "next/link";

type SbarIconProps = {
  icon: JSX.Element;
  text: string;
};

const SidebarIcon = ({ icon, text }: SbarIconProps) => {
  return (
    <Link href={text === "Home" ? "/" : `#${text}`}>
      <div className="sidebar-icon group">
        <>
          {icon}
          <span className="tooltip group-hover:scale-100">{text}</span>
        </>
      </div>
    </Link>
  );
};

export default SidebarIcon;
