import React from "react";
import Image from "next/image";

type CardProps = {
  src: string;
  title: string;
  list: Array<string>;
};

const Card = ({ src, title, list }: CardProps) => {
  const listEl = (li: string) => {
    return (
      <li className="text-gray-300" key={li}>
        {li}
      </li>
    );
  };

  return (
    <div className="bg-lighterBlack min-w-fit max-w-md max-h-fit text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center">
      <Image src={src} width={100} height={100} alt={"image"} />
      <h3 className="text-lg text-green-500 font-medium pt-8 pb-2  ">
        {title}
      </h3>
      <ul>{list.map(listEl)}</ul>
    </div>
  );
};

export default Card;
