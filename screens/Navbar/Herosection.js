"use client";
import React from "react";
import { HeroScrollDemo } from "../heroscroll";

import { Button } from "../../Components/ui/Moving-border";
import Collobarate from "./Collobarate";
const Herosection = () => {
  return (
    <>
      <div className="relative">
        <div className=" px-14 sm:px-44">
          <div className=" mt-10 h-770px  flex justify-between z-50  ">
            <div className=" mx-auto border-l border-red-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>

            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
            <div className=" mx-auto border-l border-blue-950"></div>
          </div>
        </div>

        <div className="linear h-96 w-full md:w-3/5 shadow-2xl blur-3xl flex justify-center   rounded-full -z-30 absolute top-80 md:left-56"></div>

        <div className="flex justify-center   ">
          <div className="absolute top-14">
            <h1 className="text-white text-2xl sm:text-7xl text-center font-poppins font-bold ">
              Managing Digital menu
              <br /> <span> boards make things a breeze.</span>
            </h1>
            <h1 className="text-white text-sm md:text-2xl text-center mt-7 px-4">
  Entice customers with irresistible specials, prompting them to increase their <br className="hidden md:block"/> orders while waiting in line. Save costs and enhance profits.
</h1>

            <h1 className="text-white text-sm  flex justify-center"></h1>
            <div className="flex justify-center my-4 ">
              <Button
                borderRadius="1.75rem"
                className="bg-blue-950 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Get started
              </Button>
            </div>
          </div>

          <div className="absolute top-0 mt-5 sm:mt-4 ">
            <HeroScrollDemo />
          </div>
        </div>
      </div>
      <div className=" sm:mt-96">
        <Collobarate />
      </div>
    </>
  );
};

export default Herosection;
