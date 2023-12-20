"use client";

import { workData } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Icon from "./ui/Icon";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen justify-center my-0 py-24 mx-80 h-screen max-w-6xl items-start">
      <div className="flex justify-center items-center mb-5">
        <h2 className="font-firaSansFont text-DELarge text-lightNavy font-bold">
          <span className="mr-3 font-firaSansFont text-green">02. </span>Work
        </h2>
        <hr className="border border-t-1 border-green w-96 ml-3" />
      </div>

      <Tabs defaultValue='Dark Pools' className="w-[700px]">
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
              <h2 className="font-firaSansFont text-largePlus text-lightNavy">
                {title} <span className="text-green">@ {company}</span>
              </h2>
              <p className="font-firaSansFont text-sm text-lightestNavy mb-6">
                {startDate} - {endDate}
              </p>
              {responsibilities.map((responsibility, i) => (
                <div className="flex items-baseline mb-3" key={i}>
                  <Icon name="caretRight" color="green" size="small" />
                  <p className="ml-2 font-firaSansFont text-slate">{responsibility}</p>
                </div>
              ))}
            </TabsContent>
          )
        )}
      </Tabs>
    </div>
  );
};

export default Work;
