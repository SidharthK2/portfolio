import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

type CardProps = {
  image: string;
  title: string;
  deployed: boolean;
  desc: string;
  repo: string;
  demo: string;
};

const ProjectCard = ({
  image,
  title,
  deployed,
  desc,
  repo,
  demo,
}: CardProps) => {
  return (
    <div className="card w-80 bg-lighterBlack shadow-xl">
      <figure>
        <img src={image} alt={title} width={400} height={400} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {deployed ? (
            <div className="mx-2 badge badge-secondary">Live</div>
          ) : (
            <></>
          )}
        </h2>
        <p>{desc}</p>
        <div className="card-actions pt-4 flex justify-center">
          <div className="badge">
            <a href={repo}>
              <AiFillGithub className="text-3xl" />
            </a>
          </div>
          <div className="badge">
            <a href={demo}>
              <FiExternalLink className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
