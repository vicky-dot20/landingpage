"use client";
import React from "react";

const Navbar = () => {
  return (
    <div className=" ">
    <nav className="nav-container mx-2 md:mx-5 lg:mx-10  rounded-xl mt-5 border border-gray-700  ">
      <div className="logo-container" style={{ cursor: "pointer" }}>
        <img src="/Vector (3).png" alt="logo" className="logo-img" />
        <h1 className="logo-heading">eWalls</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://ic.ewalls.io/" target="_blank">
          <button className="login-button" type="button">
            Login
          </button>
        </a>
        <button className="get-started-button " type="button">
          Get Started
        </button>
        
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
