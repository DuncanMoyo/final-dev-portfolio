"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import Icon from "./ui/Icon";

const Navbar = () => {
  return (
    <div className="md:fixed md:top-0 md:left-0 md:right-0 md:z-10">
      {/* TOP BAR */}
      <div className="bg-charcoal-gray h-10 justify-around lg:flex hidden">
        <div className="flex w-full items-center justify-between px-12 h-24">
          {/* ICONS - LEFT SIDE */}
          <div className="">
            <h1 className="text-green text-DELarge font-bold">D</h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex">
            <ol className="flex items-center justify-between p-0 m-0">
              {navLinks.map(({ name, url, itemNumber }, index) => (
                <Link
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
                </Link>
              ))}
            </ol>
            <Button variant="outline" className="py-3 px-4 ml-4 text-green">
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Fixed Divs */}
      <div className="fixed flex flex-col bottom-0 left-10 p-4 items-center justify-between">
        {socialLinks.map(({ icon, link }, index) => (
          <Link key={index} href={link} target="_blank" className="pb-4">
            <Icon name={icon} />
          </Link>
        ))}

        <hr className="border border-t-1 border-lightNavy h-40" />
      </div>
      <div className="fixed flex flex-col items-center bottom-0 right-10 p-4 justify-between">
        <p className="fixed font-robotoFont bottom-[250px] text-sm text-lightNavy rotate-90">
          duncanfmoyo@gmail.com
        </p>
        <hr className="border border-t-1 border-lightNavy h-40" />
      </div>
    </div>
  );
};

export default Navbar;
