import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faPlay, faForward, faRandom, faRedo } from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
  return (
    <div className="absolute bottom-5 h-[50%] max-w-[88%] bg-red-900 rounded-2xl p-6 text-white shadow-lg">
      <p className="font-bold text-lg mb-4">Now Playing</p>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Random Album"
        className="w-full rounded-lg mb-4"
      />
      <div className="mb-4">
        <p className="text-2xl font-bold">Beat It</p>
        <p className="text-gray-300 text-sm">Michael Jackson</p>
      </div>
      <div className="flex items-center justify-between mb-4 text-sm">
        <span>2:15</span>
        <input type="range" className="w-2/3 mx-2" />
        <span>4:18</span>
      </div>
      <div className="flex justify-between items-center space-x-4">
        <button className="text-white text-xl hover:text-red-300" aria-label="Backward">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="text-white text-2xl hover:text-red-300" aria-label="Play">
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button className="text-white text-xl hover:text-red-300" aria-label="Forward">
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button className="text-white text-xl hover:text-red-300" aria-label="Random">
          <FontAwesomeIcon icon={faRandom} />
        </button>
        <button className="text-white text-xl hover:text-red-300" aria-label="Repeat">
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
