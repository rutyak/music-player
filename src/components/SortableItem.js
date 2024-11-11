// SortableItem.js
import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, index, song, setSongId }) => {
  const [clickDelay, setClickDelay] = useState(false); // State to handle click delay

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSongId(song._id);
  };

  return (
    <tr
      onClick={handleClick}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="hover:bg-[#640000] transition duration-200"
    >
      <td className="py-2 px-4 text-white">{index + 1}</td>
      <td className="py-2 px-4 flex items-center space-x-2">
        <img
          src={song.image}
          alt={song.title}
          className="w-10 h-10 object-cover rounded"
        />
        <span className="text-white">{song.title}</span>
      </td>
      <td className="py-2 px-4 text-white">{song.playing.toString()}</td>
      <td className="py-2 px-4 text-white">{song.time}</td>
      <td className="py-2 px-4 text-white">{song.album}</td>
    </tr>
  );
};

export default SortableItem;
