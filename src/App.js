import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MusicPage from "./components/MusicPage";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [songId, setSongId] = useState(0);

  // function handleToggleMenu() {
  //   setOpenMenu(!openMenu);
  // }

  return (
    <div className="flex justify-center items-center w-[98vw] h-[100vh]">
      <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="bg-gradient-to-b from-[#4C0000] to-[#0A0A0A] h-full text-white overflow-y-auto scrollbar mobile:w-[100%] sm:w-[100%] lg:w-full xl:w-[57%]">
        <Navbar />
        <MusicPage songId={songId} setSongId={setSongId} />
      </div>
      <div
        className="text-white relative w-[21%] h-full flex flex-col justify-end items-center"
        style={{ backgroundColor: "#210A0A" }}
      >
        <MusicPlayer songId={songId} setSongId={setSongId} />
      </div>
    </div>
  );
};

export default App;
