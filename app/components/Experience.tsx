"use client";

import { workData } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Icon from "./ui/Icon";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col min-h-screen justify-center pt-[10vh] my-0 mx-auto h-full max-w-5xl items-start">
      <div className="flex justify-center items-center mb-5">
        <h2 className="flex font-firaSansFont text-largePlus md:text-DELarge font-bold text-lightNavy">
          <span className="mr-3 font-firaSansFont text-green">02. </span>Experience
        </h2>
        <hr className="hidden md:block border border-t-1 border-green w-44 md:w-96 ml-3" />
      </div>

      <Tabs defaultValue="Dark Pools" className="w-full">
        <TabsList>
          {workData.map(({ company }, index) => (
            <TabsTrigger key={index} value={company}>
              <p className="font-robotoFont text-sm ">{company}</p>
            </TabsTrigger>
          ))}
        </TabsList>
        {workData.map(
          ({ company, endDate, responsibilities, startDate, title }, index) => (
            <TabsContent key={index} value={company}>
              <h2 className="font-firaSansFont text-base md:text-largePlus text-lightNavy">
                {title} <span className="text-green">@ {company}</span>
              </h2>
              <p className="font-firaSansFont pt-1 text-xs md:text-sm text-lightestNavy mb-6">
                {startDate} - {endDate}
              </p>
              {responsibilities.map((responsibility, i) => (
                <div className="flex items-baseline mb-3" key={i}>
                  <Icon name="caretRight" color="green" size="small" />
                  <p className="ml-2 font-firaSansFont text-slate">
                    {responsibility}
                  </p>
                </div>
              ))}
            </TabsContent>
          )
        )}
      </Tabs>
    </div>
  );
};

export default Experience;
