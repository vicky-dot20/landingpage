"use client";
import React from "react";
import { BackgroundGradientDemo } from "./card";
import { HeroParallaxDemo } from "./heroparell";
import { CardHoverEffectDemo } from "./Hovercard";
import { EvervaultCardDemo } from "./evervaultcard";

const Collobarate = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-7xl text-center mt-7 px-4 text-gradient">
        The eWalls way
      </h1>
      <h1 className="text-xl md:text-2xl text-center text-white my-5">
        More reasons to collaborate with us.
      </h1>

      <div className="mt-10 md:mt-20 md:mx:20">
        <BackgroundGradientDemo />
      </div>
      <br />
      <br />
      <br />
      <div className="mt-[41rem] md:mt-[10rem]">
        {" "}
        <HeroParallaxDemo />
      </div>
      <div className="td-figure flex justify-center   ">
        
        <div className="w-32 md:w-56  absolute right-0 -bottom-36 md:-bottom-72  ">
          <img src="/ipad2.png"></img>
        </div>
        <div className="flex justify-center items-center absolute md:-bottom-20 text-white">
          <div>
            <h1 className="text-center md:text-3xl">
              Showcase your best design
            </h1>
            <div className="flex justify-center ">
              <p className=" md:w-1/2 md:text-xl ">
                Embrace visual allure with our digital signage solutions,
                igniting your brand's essence. Elevate spaces with captivating
                displays that effortlessly highlight your creativity,
                highlighting creativity and impact. Unfold your story in vibrant
                colors and dynamic visuals, transforming spaces into
                extraordinary showcases of style and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  w-32 md:w-56 absolute ">
        <img src="/Pad.png"></img>
      </div>
      <div className="mt-72">
        <CardHoverEffectDemo/>
      </div>
      {/* connect on any device section */}
      <div className="flex justify-center text-white mx-4 md:mx-28 my-4 ">
        <div className="custom-border w-auto p-7 rounded-xl">
        <h1 className="text-2xl">Connect on Any Device</h1>
        <p className="text-xl">Empower communication with eWalls' versatile digital solutions. Seamlessly connect across screens - high-definition displays, video walls, kiosks, and more. Effortlessly manage and disseminate content on diverse platforms, breaking screen limitations. Engage audiences dynamically, ensuring widespread impact in the digital realm.</p>
        </div>
      </div>
      <div className="md:flex md:justify-between text-white mx-4 md:mx-28 md:my-4  ">
        <div className="rounded-2xl bg-transparent ">
          <img src="/Componenttv.png"></img>
        </div>
        <div className="rounded-2xl bg-transparent">
        <img src="/Componentlaptop.png"></img>
        </div>
        <div className="rounded-2xl bg-transparent">
        <img src="/Componenttab.png"></img>
        </div>
      </div>
      {/* banner img */}
      <div>
        <div className="relative">
          <img className="w-full" src="/bannerbgline.png"></img>
          <div className="flex justify-center items-center"><img className="absolute top-0 md:top-28 w-4/6" src="/bannerimg.png"></img></div>
          
        </div>
      </div>
      {/* section:designed for all types of business */}
      <div>
        <div>
        <h1 className="font-semibold text-3xl text-center text-white">
          Designed for all types of business.
          </h1>
          <h1 className="font-normal text-xl text-center text-white">Connect on any device and add your design to be displayed in real-time</h1>
        </div>
        <div>
          <EvervaultCardDemo/>
        </div>
      </div>
    </div>
  );
};

export default Collobarate;
