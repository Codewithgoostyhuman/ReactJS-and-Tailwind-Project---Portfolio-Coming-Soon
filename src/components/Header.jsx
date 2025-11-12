import React from "react";
import HeadLine from "./Header-Subcomponents/HeadLine";

const Header = () => {
  return (
    <header className="lg:pl-60 md:pl-40 sm:pl-20 lg:pr-60 md:pr-40 sm:pr-20 lg:pb-8 md:pb-6 sm:pb-4 lg:pt-8 md:pt-6 sm:pt-4 bg-transparent">
      <div className="h-fit text-white lg:p-6 md:p-4 sm:p-3 flex lg:flex-row md:flex-col sm:flex-col sm:gap-4 items-center justify-between border-2  border-gray-700 rounded-4xl hover:scale-101 transition-all ease-in-out duration-1000 bg-black hover:bg-gray-800 hover:border-2 hover:border-gray-400">
        <div className="m-auto lg:w-70 flex items-center">
          <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-xl tracking-wider hover:animate-bounce">
            Zeeshan Tahir Alvi
          </h1>
        </div>
        <div className="m-auto p-auto lg:w-70 md:w-55 sm:w-35 hover:animate-bounce">
          <span>
            <HeadLine />
          </span>
        </div>
        <div className="m-auto flex flex-row lg:gap-4 md:gap-3 sm:gap-2 lg:w-70">
          <a href="https://www.instagram.com/goostydevs/" target="_blank" className="hover:bg-fuchsia-500/50 hover:scale-101 transition-all duration-1000 p-3 rounded-3xl active:bg-fuchsia-500/50">
            Instagram
          </a>
          <span className="pt-3 pb-3">|</span>
          <a href="https://github.com/Codewithgoostyhuman" target="_blank" className="hover:bg-black/50 hover:scale-101 transition-all duration-1000 p-3 rounded-3xl active:bg-black/50">
            GitHub
          </a>
          <span className="pt-3 pb-3">|</span>
          <a
            href="https://www.linkedin.com/in/zeeshan-tahir-1a2636389/"
            target="_blank" className="hover:bg-blue-500/50 hover:scale-101 transition-all duration-1000 p-3 rounded-3xl active:bg-blue-500/50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
