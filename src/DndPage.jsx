import axios from "axios";
import { useState, useEffect } from "react";
import { DndIndex } from "./DndIndex";

export function DndPage() {
  const [dnd, setDnd] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/dnd.json").then((response) => {
      console.log(response.data);
      setDnd(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <DndIndex dnd={dnd} />
    </main>
  );
}
