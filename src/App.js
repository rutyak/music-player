import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MusicPage from "./components/MusicPage";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="flex justify-center items-center w-[98vw] h-[100vh]">
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="bg-[#3b0000] h-full text-white overflow-y-auto scrollbar mobile:w-[100%] sm:w-[100%] lg:w-full xl:w-[63%]">
        <Navbar />
        <MusicPage />
      </div>
      <div className="bg-black text-white relative w-[18%] h-full flex flex-col justify-end items-center">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
