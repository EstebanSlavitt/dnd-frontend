import { useEffect, useState } from "react";
import { getClasses, getRaces } from "./apiService";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { DndIndex } from "./DndIndex";

export function DndIndexPage() {
  const dnd = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (dnd) => {
    console.log("handleShow", dnd);
    navigate(`/photos/${dnd.id}`);
  };

  return (
    <div>
      <DndIndex photos={dnd} onShow={handleShow} />
    </div>
  );
}

export function DndNew({ onCreate }) {
  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);

  useEffect(() => {
    getClasses().then(setClasses);
    getRaces().then(setRaces);
  }, []);

  const fetchclasses = () => {
    axios
      .get("https://www.dnd5eapi.co/api/classes")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

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
