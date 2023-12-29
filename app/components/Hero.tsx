"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { hoverAnimation } from "@/lib/motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen justify-center my-0 mx-auto h-screen max-w-full md:max-w-6xl items-start"
    >
      <h1 className="text-base text-green font-robotoFont mb-3 ml-1">
        Hi, my name is
      </h1>
      <h2 className="text-DELarge md:text-QELarge text-lightestNavy font-firaSansFont font-bold">
        Duncan Moyo.
      </h2>
      <h3 className="text-DELarge md:text-QELarge font-firaSansFont text-slate font-bold">
        I build things for the web.
      </h3>
      <p className="font-firaSansFont text-slate text-mediumPlus w-full md:w-2/3 ml-1 mt-5">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        finishing up my projects with{" "}
        <Link
          href="https://www.alxafrica.com/"
          target="_blank"
          className="text-green hover-underline"
        >
          ALX Africa
        </Link>
        .
      </p>
      <motion.div whileHover={hoverAnimation}>
        <AnchorLink href="#projects">
          <Button
            variant="outline"
            size={"lg"}
            className="py-5 px-7 mt-12 text-base ml-1  text-green"
          >
            Check out my projects!
          </Button>
        </AnchorLink>
      </motion.div>
    </div>
  );
};

export default Hero;
