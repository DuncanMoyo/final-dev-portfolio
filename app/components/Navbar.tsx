"use client";

import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navLinks, socialLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { hoverAnimation } from "@/lib/motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
      {/* TOP BAR */}
      <div className="h-10 justify-around lg:flex hidden">
        <div className="bg-navy flex w-full items-center justify-between pl-5 pr-12 h-24">
          {/* ICONS - LEFT SIDE */}
          <AnchorLink href="#home">
            <Image
              src="/assets/images/duncan-logo.png"
              alt="Duncan logo"
              width={50}
              height={50}
            />
            {/* <h1 className="text-green text-DELarge font-bold">DM</h1> */}
          </AnchorLink>

          {/* RIGHT SIDE */}
          <div className="flex">
            <ol className="flex items-center justify-between p-0 m-0">
              {navLinks.map(({ name, url, itemNumber }, index) => (
                <AnchorLink
                  className=" text-lightNavy hover:text-green"
                  key={index}
                  href={url}
                >
                  <li className="font-robotoFont p-3 text-sm">
                    <span className="text-green text-sm mr-2">
                      {itemNumber}
                    </span>
                    {name}
                  </li>
                </AnchorLink>
              ))}
            </ol>
            <motion.div whileHover={hoverAnimation}>
              <Link
                href="https://drive.google.com/file/d/1jJpUf8f05YfTrSph48jeQRiMrZAzpNO6/view?usp=sharing"
                target="_blank"
              >
                <Button variant="outline" className="py-3 px-4 text-green">
                  Resume
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fixed Divs */}
      <div className="fixed flex-col bottom-0 left-10 p-4 md:flex hidden items-center justify-between">
        {socialLinks.map(({ icon, link }, index) => (
          <motion.div
            whileHover={hoverAnimation}
            className="md:flex hidden items-center justify-between"
          >
            <AnchorLink
              key={index}
              href={link}
              target="_blank"
              className="pb-4"
            >
              <Icon name={icon} />
            </AnchorLink>
          </motion.div>
        ))}

        <hr className="border border-t-1 w-0 border-lightNavy h-40" />
      </div>
      <div className="fixed flex-col items-center bottom-0 right-10 p-4 justify-between md:flex hidden">
        <p className="fixed font-robotoFont bottom-[250px] text-sm text-lightNavy rotate-90">
          duncanfmoyo@gmail.com
        </p>
        <hr className="border border-t-1 border-lightNavy h-40" />
      </div>

      {/* MOBILE VIEW */}
      <div
        className={`fixed flex bg-navy overflow-x-hidden z-50 shadow-md px-4 top-0 left-0 right-0 w-full justify-between py-3 items-center md:hidden ${
          toggle ? "transition-all ease-out duration-500" : ""
        }`}
      >
        <AnchorLink href="#home">
          <Image
            src="/assets/images/duncan-logo.png"
            alt="Duncan logo"
            width={35}
            height={35}
          />
        </AnchorLink>

        <Icon
          name={toggle ? "close" : "menu"}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="flex fixed top-10 bottom-0 left-0 right-0 z-30 md:hidden pt-20 bg-navy shadow-md border-b h-screen  border-gray flex-col transition-all ease-out duration-500">
          {navLinks.map(({ name, url }, index) => (
            <AnchorLink
              onClick={() => setToggle(false)}
              className="my-2 mx-auto text-lightNavy font-robotoFont"
              key={index}
              href={url}
            >
              {name}
            </AnchorLink>
          ))}
          <div className="mx-auto mt-3">
            <Link
              href="https://drive.google.com/file/d/1jJpUf8f05YfTrSph48jeQRiMrZAzpNO6/view?usp=sharing"
              target="_blank"
            >
              <Button
                variant="outline"
                className="py-3 px-4 text-green font-robotoFont"
              >
                Resume
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
