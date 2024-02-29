"use client";
import React from "react";
import { BackgroundGradient } from "../../Components/ui/gradieant-card";

import Image from "next/image";

export function BackgroundGradientDemo() {
  const sampleContent = [
    {
      id: 1,
      imageUrl:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      altText: "Image 1",
      title: "Sales Increase",
      description: "eWalls powered displays garner 400% more attention than static ones, drawring in 8 out of 10 customers to enter stores. This translates to increased sales oppurtunities and foot traffic, driving potential for higher revenue.",
      
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      altText: "Image 2",
      title: "Enhanced Satisfaction",
      description: "eWalls cuts checkout wait perception by upto 35%, supplemented by queuing data. It also serves as an entertainment hub with video, TV streams, and interactive games that elevates customer’s mood.",
      
    },
    {
      id: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      altText: "Image 3",
      title: "Engagement",
      description: "eWalls captivates 63% and intrigues 59% for more information, leveraging visuals for an 83% recall rate, retaining 65% of information even after three days.",
     
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-3 gap-10 h-96 w-4/5 md:w-4/5 md:max-h-full mb-10">
        {/* Map through the sample content array */}
        {sampleContent.map((item) => (
          <BackgroundGradient
            key={item.id}
            className="rounded-[22px] h-full p-4 sm:p-10 bg-black dark:bg-zinc-900"
          >
            <p className="text-base text-center sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200 flex justify-center">
              {item.title}
            </p>
            <p className="text-xl pt-10 mt-5 text-white dark:text-neutral-400">
              {item.description}
            </p>
            
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
