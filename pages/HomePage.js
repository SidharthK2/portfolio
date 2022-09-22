import React from "react";

export default function HomePage() {
  return (
    <div className="Home text-green-500 flex flex-col w-screen h-screen bg-lightBlack p-2 ">
      <div className="title text-2xl font-bold text-center">Home</div>
      <div className="Homebody m-1 text-center flex flex-col items-center">
        <div className="text-lg h-fit w-fit p-2 bg-[#08D9D6] text-black font-semibold">
          Hey I am Sid
        </div>
        <a href="https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea">
          this color scheme slaps
        </a>
      </div>
    </div>
  );
}
