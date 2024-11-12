import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full pl-16 pr-10 py-4 flex items-center justify-between">
      <div className="w-[40%] flex space-x-12 text-white">
        <a href="/music" className="hover:underline">
          Music
        </a>
        <a href="/podcast" className="hover:underline">
          Podcast
        </a>
        <a href="/live" className="hover:underline">
          Live
        </a>
        <a href="/radio" className="hover:underline">
          Radio
        </a>
      </div>

      <div className="relative w-[50%] flex items-center bg-[#2b0000] rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Michael Jackson"
          className="bg-transparent outline-none text-white placeholder-white w-56"
        />
        <FaSearch className="absolute right-6 text-white ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
