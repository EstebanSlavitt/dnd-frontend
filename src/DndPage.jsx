import axios from "axios";
import { useState, useEffect } from "react";
import { DndIndex } from "./DndIndex";
import { DndNew } from "./DndNew";

export function DndPage() {
  const [dnd, setDnd] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/dnd.json").then((response) => {
      console.log(response.data);
      setDnd(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/dnd.json", params).then((response) => {
      setDnd([...dnd, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <DndNew onCreate={handleCreate} />
      <h1>Welcome to React!</h1>
      <DndIndex dnd={dnd} />
    </main>
  );
}
