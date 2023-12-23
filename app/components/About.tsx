"use client";

import { aboutLanguages } from "@/lib/constants";
import Icon from "./ui/Icon";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen justify-center pt-40 md:pt-0 my-0 mx-auto h-screen max-w-full md:max-w-6xl items-start"
    >
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-firaSansFont text-largePlus md:text-DELarge font-bold text-lightNavy">
          <span className="mr-3 font-firaSansFont text-green">01. </span>About
          Me
        </h2>
        <hr className="hidden md:block border border-t-1 border-green w-44 md:w-96 ml-3" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <p className="mb-4 pt-6 md:pt-0 font-firaSansFont text-medium md:text-large text-slate">
            Hello! My name is Duncan and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to try a different career move — turns out trying to
            center a div taught me a lot about HTML & CSS!
          </p>
          <p className="mb-4 font-firaSansFont text-medium md:text-large text-slate">
            Fast-forward to today, and I’ve had the privilege of learning on a{" "}
            <Link
              className="text-green hover-underline"
              href="https://www.alxafrica.com/"
              target="_blank"
            >
              scholarship program
            </Link>
            , worked at a{" "}
            <Link
              className="text-green hover-underline"
              href="https://www.darkpools.ai/"
              target="_blank"
            >
              start-up
            </Link>
            , and currently{" "}
            <Link
              className="text-green hover-underline"
              href="https://drive.google.com/file/d/1jJpUf8f05YfTrSph48jeQRiMrZAzpNO6/view?usp=sharing"
              target="_blank"
            >
              searching for new opportunites
            </Link>
            . My main focus these days is building accessible, inclusive
            products and digital experiences for myself and a variety of
            clients.
          </p>
          <p className="font-firaSansFont text-medium md:text-large text-slate">
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="items-center mt-2 md:mt-5 w-full md:w-1/2 text-slate text-sm grid grid-cols-2 gap-4">
            {aboutLanguages.map((language, index) => (
              <div className="flex items-center" key={index}>
                <Icon name="caretRight" color="green" size="small" />
                <p className="font-robotoFont ml-1">{language}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="image-tint relative z-0 mt-20 md:mt-0 md:ml-20 before:absolute before:-top-10 before:-left-10 before:w-full md:before:max-w-[400px]
            before:h-full before:border-2 before:border-green before:z-[-1]"
        >
          <Image
            alt="profile"
            src="/assets/images/duncan.png"
            className="z-10 w-full max-w-[400px] md:max-w-[400px] hover:-translate-x-10 hover:-translate-y-10 ease-in-out duration-500"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
