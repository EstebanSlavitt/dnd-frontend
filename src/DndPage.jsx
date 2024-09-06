import axios from "axios";
import { useState, useEffect } from "react";
import { DndIndex } from "./DndIndex";
import { DndNew } from "./DndNew";
import { Modal } from "./Modal";
import { DndShow } from "./DndShow";

export function DndPage() {
  const [dnd, setDnd] = useState([]);
  const [isDndShowVisible, setIsDndShowVisible] = useState(false);
  const [currentDnd, setCurrentDnd] = useState({});

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

  const handleShow = (dnd) => {
    console.log("handleShow", dnd);
    setIsDndShowVisible(true);
    setCurrentDnd(dnd);
  };

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/dnd/${id}.json`, params).then((response) => {
      setDnd(
        dnd.map((dnd) => {
          if (dnd.id === response.data.id) {
            return response.data;
          } else {
            return dnd;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/dnd/${id}.json`).then(() => {
      setDnd(dnd.filter((dnd) => dnd.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsDndShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <DndNew onCreate={handleCreate} />
      <h1>Welcome to React!</h1>
      <DndIndex dnd={dnd} onShow={handleShow} />
      <Modal show={isDndShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <DndShow photo={currentDnd} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </main>
  );
}
