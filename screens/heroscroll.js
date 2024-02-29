"use client";
import React from "react";
import { ContainerScroll } from "../Components/ui/container-scroll";

export function HeroScrollDemo() {
  return (
    <div className="flex  overflow-hidden mt-10">
      <ContainerScroll titleComponent={<></>} />
    </div>
  );
}
