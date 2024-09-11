import axios from "axios";
import { useState } from "react";
export function CharactersNew({ onCreate }) {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };

  const randomName = () => {
    console.log("randomName");
    axios.get("https://www.dnd5eapi.co/api/classes").then((response) => {
      setName(response.data.results.sort(() => 0.5 - Math.random())[0].name);
    });
  };

  return (
    <div>
      <h1>New Photo</h1>
      <form>
        <div>
          Name: <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
          <button type="button" onClick={randomName}>
            Random
          </button>
        </div>
        <div>
          Class_name: <input name="class_name" type="text" />
        </div>
        <div>
          Race: <input name="race" type="text" />
        </div>
        <div>
          Level: <input name="level" type="text" />
        </div>
        Background: <input name="background" type="text" />
        <div>
          Alignment: <input name="aligment" type="text" />
        </div>
      </form>
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl font-bold text-white font-cinzel mb-6 text-center">New Characters</h1>

        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
          >
            Create
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            type="button"
            className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => {
              const randomParams = {
                name: `Random Name #${Math.floor(Math.random() * 1000)}`,
                class_name: "Random Class", // Replace with real logic if needed
                race: "Random Race", // Replace with real logic if needed
                level: Math.floor(Math.random() * 20) + 1,
                background: "Random Background",
                alignment: "Chaotic Good",
              };
              onCreate(randomParams);
            }}
          >
            Create Random Character
          </button>
        </div>
      </div>
    </div>
  );
}
