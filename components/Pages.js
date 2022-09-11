import React from "react";

export default function Pages(props) {
  return (
    <div className="pages ml-16 h-screen w-screen">
      {props.children}
      <div className="page2 w-screen h-screen bg-lightBlack p-2 text-offWhite">
        <div className="page2 body">Hello</div>
      </div>
    </div>
  );
}
