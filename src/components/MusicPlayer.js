import React, { useState, useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faPause,
  faForward,
  faRandom,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { Howl } from "howler";
import { songs } from "../config/Constant";

const MusicPlayer = ({ songId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);

  const soundRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (soundRef.current) soundRef.current.unload();
    };
  }, []);

  const playSong = useCallback(
    (index) => {
      if (soundRef.current) {
        soundRef.current.stop();
      }

      const sound = new Howl({
        src: [songs[index]?.song],
        html5: true,
        onplay: () => {
          setDuration(sound.duration());
          setIsPlaying(true);
          intervalRef.current = setInterval(() => {
            setCurrentTime(sound.seek());
          }, 1000);
        },
        onend: () => nextSong(),
      });

      soundRef.current = sound;
      sound.play();
    },
    [nextSong] 
  );

  const nextSong = useCallback(() => {
    clearInterval(intervalRef.current);
    let nextIndex = isShuffle
      ? Math.floor(Math.random() * songs.length)
      : (songIndex + 1) % songs.length;
    setSongIndex(nextIndex);
    setCurrentTime(0);
    playSong(nextIndex);
  }, [isShuffle, songIndex, playSong]); 

  useEffect(() => {
    clearInterval(intervalRef.current);

    const filteredSong = songs.findIndex((item) => item._id === songId);
    if (filteredSong !== -1) {
      playSong(filteredSong);
      setSongIndex(filteredSong);
    }
  }, [songId, playSong]);

  // Play/Pause toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      if (!soundRef.current) {
        playSong(songIndex);
      } else {
        soundRef.current.play();
        intervalRef.current = setInterval(() => {
          setCurrentTime(soundRef.current.seek());
        }, 1000);
        setIsPlaying(true);
      }
    }
  };

  // Backward button handler
  const previousSong = () => {
    clearInterval(intervalRef.current);
    let prevIndex = (songIndex - 1 + songs.length) % songs.length;
    setSongIndex(prevIndex);
    setCurrentTime(0);
    playSong(prevIndex);
  };

  // Shuffle toggle
  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  // Repeat button handler
  const handleRepeat = () => {
    if (soundRef.current) {
      soundRef.current.seek(0);
      setCurrentTime(0);
      if (!isPlaying) {
        togglePlayPause();
      }
    }
  };

  // Handle range slider change
  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    soundRef.current.seek(newTime);
    setCurrentTime(newTime);
  };

  return (
    <div className="absolute bottom-5 h-[41vh] w-[70%] bg-[#681212] rounded-2xl px-6 py-4 text-white shadow-lg">
      <p className="font-semibold text-sm mb-4 text-center">Now Playing</p>
      <img
        src={songs[songIndex].image}
        alt="Album"
        className="rounded-lg mb-4 w-[200px] h-[100px] object-cover object-top"
      />
      <div className="mb-4">
        <p className="text-sm font-semibold text-center">
          {songs[songIndex].title}
        </p>
        <p className="text-gray-300 text-sm text-center">
          {songs[songIndex].artist}
        </p>
      </div>
      <div className="flex items-center justify-between mb-4 text-sm">
        <span>{formatTime(currentTime)}</span>
        <input
          type="range"
          className="w-2/3 mx-2 h-1 rounded-full appearance-none focus:outline-none"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          style={{
            background: `linear-gradient(to right, white ${
              (currentTime / duration) * 100
            }%, rgba(128, 128, 128, 0.5) ${(currentTime / duration) * 100}%)`,
          }}
        />
        <span>{formatTime(duration)}</span>
      </div>
      <div className="flex justify-between items-center space-x-4">
        <button
          className="text-white text-xl hover:text-red-300"
          onClick={handleRepeat}
        >
          <FontAwesomeIcon icon={faRepeat} />
        </button>
        <button
          className="text-white text-xl hover:text-red-300"
          onClick={previousSong}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="text-white text-2xl"
          style={{ backgroundColor: "#681212" }}
          onClick={togglePlayPause}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button
          className="text-white text-xl hover:text-red-300"
          onClick={nextSong}
        >
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button
          className={`text-white text-xl hover:text-red-300 ${
            isShuffle ? "text-red-300" : ""
          }`}
          onClick={toggleShuffle}
        >
          <FontAwesomeIcon icon={faRandom} />
        </button>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicPlayer;
