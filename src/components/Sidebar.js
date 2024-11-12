import React from "react";
import {
  FaHome,
  FaFire,
  FaMusic,
  FaCompass,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ openMenu }) => {
  return (
    <div
      className={`left-0 top-0 h-screen bg-black text-white flex flex-col justify-between items-center p-5 transform transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      } mobile:w-[13%] sm:w-[10%] md:w-[13%] lg:w-[10%] xl:w-[22%] xl:translate-x-0`}
    >
      <div className="relative">
        <div className="flex items-center justify-center gap-3 space-x-2 mb-12">
          <FaMusic className="text-red-500 text-[45px]" />
          <h1 className="text-[25px] font-semibold text-red-500">
            Dream<span className="text-white">Music</span>
          </h1>
        </div>
        <nav>
          <h2 className="text-sm mb-4">MENU</h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3">
              <FaHome className="text-xl text-red-500" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaFire className="text-xl text-red-500" />
              <span>Trends</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMusic className="text-xl text-red-500" />
              <span>Library</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCompass className="text-xl text-red-500" />
              <span>Discover</span>
            </li>
          </ul>
        </nav>
        <div className="fixed bottom-12">
          <h2 className="text-sm mb-4">GENERAL</h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3">
              <FaCog className="text-xl text-red-500" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaSignOutAlt className="text-xl text-red-500" />
              <span>Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
