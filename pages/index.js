"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/screens/Navbar/navbar";
import Herosection from "@/screens/Navbar/Herosection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection/>
    </>
  );
}
