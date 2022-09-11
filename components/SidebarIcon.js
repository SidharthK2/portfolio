import React from "react";
import Link from "next/link";

export default function SidebarIcon({ icon, text }) {
  return (
    <Link href={text === "Home" ? "/" : `#${text}`}>
      <div className="sidebar-icon group">
        {icon}
        <span className="tooltip group-hover:scale-100">{text}</span>
      </div>
    </Link>
  );
}
