"use client";

import { noteworthyProjects } from "@/lib/constants";
import Icon from "./ui/Icon";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <div className="p-2 min-h-screen justify-center mb-20 mx-4 md:mx-auto h-full max-w-full md:max-w-6xl">
      <div className="flex justify-center items-center mb-5">

        <hr className="border border-t-1 border-green w-44 md:w-96 ml-3 my-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {noteworthyProjects.map(
          ({ description, tech, title, externalLink, github }, index) => (
            <div key={index} className="flex flex-col bg-darkNavy p-4">
              <div className="flex justify-between items-center">
                <Icon name="folder" color="#56ffda" size="large" />
                <div className="flex">
                  <Link className="p-2" href={github} target="_blank">
                    <Icon name="github" />
                  </Link>
                  <Link className="p-2" href={externalLink} target="_blank">
                    <Icon name="link" />
                  </Link>
                </div>
              </div>
              <p className="font-firaSansFont text-medium my-2  font-bold text-lightNavy">
                {title}
              </p>
              <p className="font-firaSansFont text-tiny mb-2 text-lightNavy">
                {description}
              </p>
              <div className="flex flex-wrap mb-1 mt-6">
                {tech.map((technology, index) => (
                  <p
                    key={index}
                    className="pr-8 font-robotoFont text-xs text-lightNavy"
                  >
                    {technology}
                  </p>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
