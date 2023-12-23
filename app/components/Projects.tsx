"use client";

import Image from "next/image";
import Icon from "./ui/Icon";
import { projectsData } from "@/lib/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col min-h-screen justify-center pt-28 my-0 mx-auto h-full max-w-5xl items-start">
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-firaSansFont text-largePlus md:text-DELarge font-bold text-lightNavy">
          <span className="mr-3 font-firaSansFont text-green">03. </span>Some Things I've built
        </h2>
        <hr className="hidden md:block border border-t-1 border-green w-44 md:w-96 ml-3" />
      </div>
      {projectsData.map(
        ({ description, externalLink, github, image, tech, title }, index) => (
          <div
            key={index}
            className="md:flex justify-between my-20 w-full hidden"
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative w-full image-tint">
                  <Link href={externalLink} target="_blank">
                    <Image
                      className=" transition-all duration-500 ease-in-out hover:bg-transparent"
                      src={image}
                      alt={title}
                      width={700}
                      height={500}
                    />
                  </Link>

                  <div>
                    <div className="absolute top-1/2 right-[-67%] transform translate-y-[-50%] w-[500px] bg-darkNavy p-6 z-10">
                      <p className="text-lightNavy font-firaSansFont text-mediumPlus text-end">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-2/3 p-2">
                  <div className="w-full text-end">
                    <p className="font-robotoFont text-sm text-green">
                      Featured Project
                    </p>
                    <p className="font-firaSansFont text-Elarge text-lightestNavy font-bold">
                      {title}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-end mb-2 mt-6">
                      {tech.map((technology, index) => (
                        <p
                          key={index}
                          className="pl-8 font-robotoFont text-sm text-lightNavy"
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                    <div className="flex justify-end mt-2">
                      <Link target="_blank" href={github} className="p-2">
                        <Icon name="github" />
                      </Link>
                      <Link target="_blank" href={externalLink} className="p-2">
                        <Icon name="link" />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-between w-2/3 p-2">
                  <div className="w-full">
                    <p className="font-robotoFont text-sm text-green">
                      Featured Project
                    </p>
                    <p className="font-firaSansFont text-Elarge text-lightestNavy font-bold">
                      {title}
                    </p>
                  </div>
                  <div>
                    <div className="flex mt-6 mb-2">
                      {tech.map((technology, index) => (
                        <p
                          key={index}
                          className="pr-8 font-robotoFont text-sm text-lightNavy"
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                    <div className="flex mt-2">
                      <Link target="_blank" href={github} className="p-2">
                        <Icon name="github" />
                      </Link>
                      <Link target="_blank" href={externalLink} className="p-2">
                        <Icon name="link" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full relative image-tint">
                  <Link href={externalLink} target="_blank">
                    <Image
                      className=" transition-all duration-500 ease-in-out hover:bg-transparent"
                      src={image}
                      alt={title}
                      width={700}
                      height={400}
                    />
                  </Link>

                  <div>
                    <div className="absolute top-1/2 left-[-67%] transform translate-y-[-50%] w-[500px] bg-darkNavy p-6 z-10">
                      <p className="text-lightNavy font-firaSansFont text-mediumPlus">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )
      )}
      {projectsData.map(
        ({ description, externalLink, github, tech, title }, index) => (
          <div key={index} className="flex md:hidden flex-col justify-between w-full p-6">
            <div className="w-full">
              <p className="font-robotoFont text-sm pb-1 text-green">
                Featured Project
              </p>
              <p className="font-firaSansFont text-large pb-2 text-lightestNavy font-bold">
                {title}
              </p>
            </div>
            <div>
              <p className="text-lightNavy font-firaSansFont text-base">
                {description}
              </p>
            </div>
            <div>
              <div className="flex mb-2 mt-6 flex-wrap">
                {tech.map((technology, index) => (
                  <p
                    key={index}
                    className="px-2 font-robotoFont text-sm text-lightNavy"
                  >
                    {technology}
                  </p>
                ))}
              </div>
              <div className="flex mt-2">
                <Link target="_blank" href={github} className="p-2">
                  <Icon name="github" />
                </Link>
                <Link target="_blank" href={externalLink} className="p-2">
                  <Icon name="link" />
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
