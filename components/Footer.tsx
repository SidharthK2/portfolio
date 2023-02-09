import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 bg-lighterBlack shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a
          href="https://www.github.com/sidharthK2"
          className="hover:underline mr-2">
          sidharthK2
        </a>
        All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0 hover:text-gray-300">
        <li>
          Vectors and icons by{" "}
          <a className="underline " href="https://www.svgrepo.com">
            SVG Repo
          </a>
        </li>
      </ul>
    </footer>
  );
};
