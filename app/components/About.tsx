"use client";

import { aboutLanguages } from "@/lib/constants";
import Icon from "./ui/Icon";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center my-0 mx-auto h-screen max-w-6xl items-start">
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-firaSansFont text-DELarge text-lightNavy">
          <span className="mr-3 font-firaSansFont text-green">01. </span>About
          Me
        </h2>
        <hr className="border border-t-1 border-green w-96 ml-3" />
      </div>

      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <p className="mb-4 font-firaSansFont text-large text-slate">
            Hello! My name is Duncan and I enjoy creating things that live on
            the internet. My interest in web development started back in 2020
            when I decided to try a different career move — turns out trying to
            center a div taught me a lot about HTML & CSS!
          </p>
          <p className="mb-4 font-firaSansFont text-large text-slate">
            Fast-forward to today, and I’ve had the privilege of learning on a
            {" "}
            <Link className="text-green" href="">
              scholarship program
            </Link>
            , worked at a{" "}
            <Link className="text-green" href="">
              start-up
            </Link>
            , and going{" "}
            <Link className="text-green" href="">
              solo
            </Link>
            . My main focus these days is building accessible, inclusive
            products and digital experiences for myself and a variety of
            clients.
          </p>
          <p className="font-firaSansFont text-large text-slate">
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="items-center mt-5 w-1/2 text-slate text-sm grid grid-cols-2 gap-4">
            {aboutLanguages.map((language) => (
              <div className="flex items-center">
                <Icon name="caretRight" color="green" size="small" />
                <p className="font-robotoFont">{language}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before: max-w-[400px]
            before:h-full before:border-2 before:border-green before:z-[-1] "
        >
          <Image
            alt="profile"
            src="/assets/images/duncan.png"
            className="hover:filter:saturate-200 transit duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
