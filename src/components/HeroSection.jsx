import React from "react";
import HeadLine from "./Header-Subcomponents/HeadLine";
import AboutMe from "./Hero-Subcomponents/AboutMe";

const HeroSection = () => {
  return (
    
    
    <section className="h-auto bg-transparent flex flex-col text-white m-0">
      
      <div className="h-auto w-vw flex md:flex-col sm:flex-col lg:flex-row flex-col justify-evenly items-center lg:m-10 md:m-8 sm:m-6 m-4 border-2 border-gray-500">
        
        <div>
          <img
            src="/Untitled design.png"
            alt="My Picture"
            className="lg:h-72 lg:w-72 md:h-68 md:w-72 sm:h-64 sm:w-68 h-56 w-56  rounded-full border-gray-700 border-4 sm:border-2  lg:m-14 md:m-10 sm:m-7 m-5 hover:lg:h-96 hover:lg:w-96 hover:md:h-92 hover:md:w-92 sm:hover:h-72 hover:sm:w-72 hover:h-64 hover:w-64 transition-all duration-1000 "
          />
        </div>

        <div className="flex flex-col justify-center items-center h-fit w-fit align-middle m-10 md:mt-1 sm:mt-1 lg:mt-10 transition-all duration-1000">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl wrap-break-word w-auto lg:p-4 md:p-3 sm:p-2 p-2 sm:flex sm:gap-5 md:gap-6 gap-2 lg:flex lg:flex-row md:flex md:flex-row sm:flex-row flex flex-col items-center">
            <span className="text-gray-300 font-extrabold bg-gray-800 lg:p-4 md:p-3 sm:p-2 p-2 lg:pr-8 md:pr-6 sm:pr-4 pr-3 lg:pl-6 md:pl-4 sm:pl-2 pl-2 rounded-r-full sm:w-fit">
              Front
            </span>{" "}
            <span className="sm:flex lg:flex sm:h-fit lg:h-fit lg:p-4 md:p-3 sm:p-2 p-2">  - End Web{" "}</span>
          
            <span className="text-gray-300 font-extrabold bg-gray-800 lg:p-4 md:p-3 sm:p-2 p-2 lg:pl-8 md:pl-6 sm:pl-4 pl-2 lg:pr-6 md:pr-4 sm:pr-2 pr-2 rounded-l-full sm:w-fit">
              Developer
            </span>
          </h1>
          <AboutMe />
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;
