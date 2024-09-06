import { useEffect, useState } from "react";
import { getClasses, getRaces } from "./apiService";

export function DndNew({ onCreate }) {
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getClasses().then(setClasses);
    getRaces().then(setRaces);
  }, []);

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleRandomCreate = (event) => {
    event.preventDefault();
    const params = {
      name: `Random Name #${Math.floor(Math.random() * 1000)}`, // Randomized name
      class_name: getRandomElement(classes), // Random class from API
      race: getRandomElement(races), // Random race from API
      level: Math.floor(Math.random() * 20) + 1,
      background: "Random Background", // Hardcoded or fetched similarly
      alignment: "Chaotic Good", // Can be randomized similarly
    };
    onCreate(params);
  };

  return (
    <form
      onSubmit={handleRandomCreate}
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-yellow-400 font-serif mb-6 text-center">Create Random D&D Character</h2>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-transform duration-300 transform hover:scale-105"
      >
        Generate Random Character
      </button>
    </form>
  );
}
