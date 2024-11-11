import React, { useEffect, useState } from "react";
import { songs } from "../config/Constant";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const MusicPage = ({ setSongId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [songList, setSongList] = useState(songs);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  
  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
  );

  useEffect(() => {
    if (songs && songs.length > 0) {
      setLoading(false);
    }
  }, [songs]);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = songList.findIndex((song) => song._id === active.id);
    const newIndex = songList.findIndex((song) => song._id === over.id);
    setSongList((items) => arrayMove(items, oldIndex, newIndex));
  }

  return (
    <>
      <div className="w-full mt-10 flex items-center justify-center">
        <div
          className="relative w-full mx-20 top-10 h-[240px] rounded-2xl"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/27d6/181f/b614afab3396f4c60bfa19b926b4b71d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-uyfKnV79xAdqXl27Al7vFZ1Q8AYuplGxa73dauzWDbc2HPsr2gQQPB4ap6sZJvVsUY7v~ZKzZ9CmDaXRB6h441PVotM5u4TvLsQmkJxWbKELlGEHTX7zau~wHR3ncSOEfpVPNOClTZXKcbSL0DiKTF87daCo4NGynyB1g3PBwz2eehBYt0FDVBk9x7CCTNNr0mj1UGJ0ruGz07fuyFinTge7XOGmI3z-YENc-z3RNwuV1w9Z8VXVhX0u5ls7al9okoFmpVwfxd6W39-ZI3dghWN6ryZLEHeC-u3iqOZHg4YEIioI6eUfNDj85jTj9qlbASXIURPUClX3V8WmyyZA__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bottom-[65px] right-[23px] flex items-center justify-end h-full">
            <div className="">
              <img
                src="https://s3-alpha-sig.figma.com/img/228e/160e/5d55e4ce985c98f27a2e4560589055d1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=li~6uyXe14zFfvD5sxmQsKZfSHIG7IehCPQAQfVcQJ~wUCyMt0FN441NmoG8zLeR~hFC2-CqyulxhApDTdBN18rGUpo6iByRbAEzoEZaKir0DkUiUCGeLeiGMbIgcy3-OPnYizIhO6exo1ApHbJE~lX1bfFksOj9EJE3gIyj0vhERTHCIzcpKYygTNRzldbShObKYWQOgVs1m2d8qBTq7u6A~DDHlkSr~o-g~KfuoEYDndVeYDqBa4i3-aPRXlVp1m2Sq9tHAqZg05mYbnKuTTlR~IMR0MmlQIQD1j2natfycOLxI7l8FNCH7~NakO~0qJIPr~hOQtuwKUz8CNmsMw__"
                alt="Michael Jackson"
                className="object-cover rounded-lg w-[380px] h-[350px]"
              />
              <div className="absolute bottom-4 left-12 text-white">
                <div className="flex items-center">
                  <img
                    className="w-3 mr-2"
                    src="https://media.istockphoto.com/id/1344841941/vector/blue-verified-account-icon-approved-profile-sign-tick-in-rounded-corners-star-top-page-logo.jpg?s=612x612&w=0&k=20&c=Ys81LaNf8DkzKVvB03y0hDQBkkkP5jrRK9lX4htlfRk="
                    alt="blue-tic-icon"
                  />
                  <span>Verified Artist</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Michael Jackson
                </h2>
                <p className="text-sm lg:text-lg">
                  27.852.501 monthly listeners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-20 flex flex-col justify-center">
        <h3 className="w-full px-20 text-lg lg:text-2xl font-bold mb-4 text-white">
          Popular
        </h3>
        {loading ? (
          <p className="w-full text-center text-white">Loading songs...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="w-full px-20 overflow-x-auto">
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
                    <tr className="text-sm lg:text-lg text-gray-300">
                      <th className="py-2 px-4">#</th>
                      <th className="py-2 px-4">Title</th>
                      <th className="py-2 px-4">Playing</th>
                      <th className="py-2 px-4">Time</th>
                      <th className="py-2 px-4">Album</th>
                    </tr>
                  </thead>
                  <tbody className="w-full text-sm lg:text-lg">
                    {songList.map((song, index) => (
                      <SortableItem
                        key={song._id}
                        id={song._id}
                        index={index}
                        song={song}
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
