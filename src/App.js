import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MusicPage from "./components/MusicPage";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [songId, setSongId] = useState(0);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="flex justify-center items-center w-[98vw] h-[100vh]">
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="bg-[#3b0000] h-full text-white overflow-y-auto scrollbar mobile:w-[100%] sm:w-[100%] lg:w-full xl:w-[58%]">
        <Navbar />
        <MusicPage setSongId={setSongId}/>
      </div>
      <div className="bg-black text-white relative w-[20%] h-full flex flex-col justify-end items-center">
        <MusicPlayer songId={songId} setSongId={setSongId}/>
      </div>
    </div>
  );
};

export default App;
