import React, { useEffect, useState } from "react";
import { songs } from "../config/Constant";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import ArtistInfo from "./ArtistInfo";

const MusicPage = ({ songId, setSongId }) => {
  const [loading, setLoading] = useState(true);
  const [songList, setSongList] = useState(songs);


  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  useEffect(() => {
    if (songs && songs.length > 0) {
      setLoading(false);
    }
  }, []);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = songList.findIndex((song) => song._id === active.id);
    const newIndex = songList.findIndex((song) => song._id === over.id);
    setSongList((items) => arrayMove(items, oldIndex, newIndex));
  }

  return (
    <>
      <ArtistInfo />
      <div className="relative w-full mt-14 flex flex-col justify-center">
        <div className="flex justify-between items-center w-full px-20">
          <h3 className="lg:text-lg font-semibold mb-4 text-white">
            Popular
          </h3>
          <p className="text-sm lg:text-base cursor-pointer hover:underline">
            See all
          </p>
        </div>
        {loading ? (
          <p className="w-full text-center text-white">Loading songs...</p>
        ): (
          <div className="w-full overflow-x-auto">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={songList.map((song) => song._id)}
                strategy={verticalListSortingStrategy}
              >
                <table className="w-full px-16 table-auto text-left">
                  <thead>
                    <tr className="lg:text-sm text-gray-300">
                      <th className="py-2 pr-4 pl-20">#</th>
                      <th className="py-2 px-4">TITLE</th>
                      <th className="py-2 px-4">PLYAING</th>
                      <th className="py-2 px-4">TIME</th>
                      <th className="py-2 pl-4 pr-20 text-right">ALBUM</th>
                    </tr>
                  </thead>
                  <tbody className="w-full lg:text-md text-white">
                    {songList.map((song, index) => (
                      <SortableItem
                        key={song._id}
                        id={song._id}
                        index={index}
                        song={song}
                        songId={songId}
                        setSongId={setSongId}
                      />
                    ))}
                  </tbody>
                </table>
              </SortableContext>
            </DndContext>
          </div>
        )}
      </div>
    </>
  );
};

export default MusicPage;
