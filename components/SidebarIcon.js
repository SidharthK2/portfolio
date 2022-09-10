import React from "react";

export default function SidebarIcon({ icon, text }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
