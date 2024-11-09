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
      className={`left-0 top-0 h-screen bg-black text-white flex flex-col justify-between p-6 transform transition-transform duration-300 ${
        openMenu ? "translate-x-0" : "-translate-x-full"
      } mobile:w-[13%] sm:w-[10%] md:w-[13%] lg:w-[10%] xl:w-[19%] xl:translate-x-0`}
    >
      <div>
        <div className="flex items-center space-x-2 mb-12">
          <FaMusic className="text-red-500 text-2xl" />
          <h1 className="text-2xl font-bold text-red-500">DreamMusic</h1>
        </div>
        <nav>
          <h2 className="text-gray-400 mb-4">MENU</h2>
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
      </div>

      <div>
        <h2 className="text-gray-400 mb-4">GENERAL</h2>
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
  );
};

export default Sidebar;
