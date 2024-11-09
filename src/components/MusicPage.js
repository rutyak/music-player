import React, { useEffect, useState } from "react";

const MusicPage = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("http://localhost:8000/fetch/songs"); // Update this URL to your backend endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch songs");
        }
        const data = await response.json();
        console.log("songs data....", data);
        setSongs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      {/* Artist Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:mx-12 mx-4 mt-8">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="relative w-full rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400"
              alt="Michael Jackson"
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Michael Jackson
              </h2>
              <p className="text-sm lg:text-lg">27.852.501 monthly listeners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Section */}
      <div className="mt-12 lg:mx-12 mx-4">
        <h3 className="text-lg lg:text-2xl font-bold mb-4 text-white">
          Popular
        </h3>
        {loading ? (
          <p className="text-center text-white">Loading songs...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="text-sm lg:text-lg text-gray-300">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Title</th>
                  <th className="py-2 px-4">Playing</th>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Album</th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-lg">
                {songs.map((song, index) => (
                  <tr
                    key={song._id}
                    className={`bg-[#440000] hover:bg-[#640000] transition duration-200`}
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
                    <td className="py-2 px-4 text-white">
                      {song.playing.toString()}
                    </td>
                    <td className="py-2 px-4 text-white">{song.time}</td>
                    <td className="py-2 px-4 text-white">
                      {song.album || "Unknown Album"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPage;
