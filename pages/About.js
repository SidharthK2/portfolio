import React from "react";

export default function AboutPage() {
  return (
    <div
      id="About"
      className="About text-green-500 flex flex-col w-screen h-screen bg-darkGray p-2 ">
      <div className="title text-2xl font-bold text-center">About</div>
      <div className="Aboutbody m-1 text-center">
        <div className="text-lg">
          <a className="underline" href="https://www.alexdanielson.com/">
            Portfolio inspiration
          </a>
        </div>
      </div>
    </div>
  );
}
