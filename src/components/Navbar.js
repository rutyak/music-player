import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    
    <div className="px-8 py-4 flex items-center justify-between">
      <div className="flex space-x-8">
        <a href="#" className="hover:underline">Music</a>
        <a href="#" className="hover:underline">Podcast</a>
        <a href="#" className="hover:underline">Live</a>
        <a href="#" className="hover:underline">Radio</a>
      </div>
      <div className="flex items-center bg-[#2b0000] rounded-full px-4 py-2">
        <input 
          type="text" 
          placeholder="Michael Jackson" 
          className="bg-transparent outline-none text-white placeholder-white w-48"
        />
        <FaSearch className="text-white ml-2" />
      </div>
    </div>
  );
};

export default Navbar;
