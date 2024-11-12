// SortableItem.js
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import musicIcon from "../assets/musicIcon.png";

const SortableItem = ({ id, index, song, setSongId, songId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePointerUp = (e) => {
    e.preventDefault();
    setSongId(song._id);
  };

  const isSelected = songId === song._id;

  return (
    <tr
      onPointerUp={handlePointerUp}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`transition duration-200 ${
        isSelected ? "bg-[#640000]" : "hover:bg-[#640000]"
      }`} 
    >
      <td className="py-2 pr-2 text-white">{isSelected? <img src={musicIcon} alt="music-icon" className="w-6"/> :index + 1}</td>
      <td className="py-2 px-2 flex items-center space-x-2">
        <img
          src={song.image}
          alt={song.title}
          className="w-10 h-10 object-cover rounded"
        />
        <span className="text-white">{song.title}</span>
      </td>
      <td className="py-2 px-4 text-white">{song.playing.toString()}</td>
      <td className="py-2 px-4 text-white">{song.time}</td>
      <td className="py-2 pl-4 text-white text-right">{song.album}</td>
    </tr>
  );
};

export default SortableItem;
