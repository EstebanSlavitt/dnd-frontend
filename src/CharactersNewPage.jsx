import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CharactersNew } from "./CharactersNew";

export function CharactersNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/Characters.json", params).then((response) => {
      console.log(response);
      navigate("/characters");
    });
  };

  return (
    <div>
      <CharactersNew onCreate={handleCreate} />
    </div>
  );
}
