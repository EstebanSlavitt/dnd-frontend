import axios from "axios";
import { useState, useEffect } from "react";
import { DndIndex } from "./DndIndex";
import { DndNew } from "./DndNew";
import { Modal } from "./Modal";
import { DndShow } from "./DndShow";

export function DndPage() {
  const [characters, setCharacters] = useState([]);
  const [isDndShowVisible, setIsDndShowVisible] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/characters.json")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  const handleCreate = (params, successCallback) => {
    axios
      .post("http://localhost:3000/characters.json", params)
      .then((response) => {
        setCharacters([...characters, response.data]);
        successCallback();
      })
      .catch((error) => {
        console.error("Error creating character", error);
      });
  };

  const handleShow = (character) => {
    setIsDndShowVisible(true);
    setCurrentCharacter(character);
  };

  const handleUpdate = (id, params, successCallback) => {
    axios
      .patch(`http://localhost:3000/characters/${id}.json`, params)
      .then((response) => {
        setCharacters(characters.map((char) => (char.id === response.data.id ? response.data : char)));
        successCallback();
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating character", error);
      });
  };

  const handleDestroy = (id) => {
    axios
      .delete(`http://localhost:3000/characters/${id}.json`)
      .then(() => {
        setCharacters(characters.filter((char) => char.id !== id));
        handleClose();
      })
      .catch((error) => {
        console.error("Error deleting character", error);
      });
  };

  const handleClose = () => {
    setIsDndShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <DndNew onCreate={handleCreate} />
      <DndIndex characters={characters} onShow={handleShow} />

      <Modal show={isDndShowVisible} onClose={handleClose}>
        {currentCharacter && <DndShow photo={currentCharacter} onUpdate={handleUpdate} onDestroy={handleDestroy} />}
      </Modal>
    </main>
  );
}
