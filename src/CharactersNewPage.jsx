import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CharactersNew } from "./CharactersNew";

// A list of possible random backstories
const backstories = [
  "Born in a small village, seeking revenge for a lost loved one.",
  "An orphan raised by thieves, now seeking redemption.",
  "Once a noble, now fallen from grace and wandering the lands.",
  "Raised by wolves in the wilderness, unsure of their human roots.",
  "Cursed by an ancient wizard, they seek to undo the spell.",
];

// Add other random data generators like random classes, races, etc.
const classes = ["Fighter", "Wizard", "Rogue", "Cleric", "Ranger"];
const races = ["Elf", "Dwarf", "Human", "Halfling", "Dragonborn"];
const alignments = ["Chaotic Good", "Lawful Neutral", "Neutral Evil"];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function CharactersNewPage() {
  const navigate = useNavigate();

  const handleCreate = () => {
    const randomCharacter = {
      name: `Random Name #${Math.floor(Math.random() * 1000)}`, // Randomized name
      class_name: getRandomElement(classes), // Random class
      race: getRandomElement(races), // Random race
      level: Math.floor(Math.random() * 20) + 1, // Random level between 1 and 20
      background: "Random Background", // Hardcoded or fetched similarly
      alignment: getRandomElement(alignments), // Random alignment
      backstory: getRandomElement(backstories), // Random backstory
    };

    axios.post("http://localhost:3000/characters.json", randomCharacter).then((response) => {
      console.log(response.data);
      navigate("/characters/backstory");
    });
  };

  return (
    <div>
      <CharactersNew onCreate={handleCreate} />
    </div>
  );
}
