import { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DndIndex } from "./DndIndex";

// DndIndexPage Component
export function DndIndexPage() {
  const dnd = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (dnd) => {
    console.log("handleShow", dnd);
    navigate(`/dnd/${dnd.id}`);
  };

  return (
    <div>
      <DndIndex dnd={dnd} onShow={handleShow} />
    </div>
  );
}

// CharactersNew Component
export function CharactersNew({ onCreate }) {
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);

  // Placeholder function for fetching classes and races
  const getClasses = async () => {
    try {
      const response = await axios.get("https://www.dnd5eapi.co/api/classes");
      return response.data.results.map((item) => item.name); // Assuming the API structure
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const getRaces = async () => {
    try {
      const response = await axios.get("https://www.dnd5eapi.co/api/races");
      return response.data.results.map((item) => item.name); // Assuming the API structure
    } catch (error) {
      console.error("Error fetching races:", error);
    }
  };

  useEffect(() => {
    getClasses().then(setClasses);
    getRaces().then(setRaces);
  }, []);

  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const handleRandomCreate = (event) => {
    event.preventDefault();
    const params = {
      name: `Random Name #${Math.floor(Math.random() * 1000)}`,
      class_name: getRandomElement(classes),
      race: getRandomElement(races),
      level: Math.floor(Math.random() * 20) + 1,
      background: "Random Background",
      alignment: "Chaotic Good",
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
