import React, { useState } from "react";

// Function to generate a more detailed random backstory
const generateRandomBackstory = () => {
  const names = ["Arin", "Belgar", "Cyrus", "Daelin", "Eldrin"];
  const classes = ["Wizard", "Rogue", "Fighter", "Warlock", "Bard"];
  const races = ["Elf", "Dwarf", "Human", "Orc", "Halfling"];
  const alignments = ["Lawful Good", "Chaotic Neutral", "Neutral Evil", "Chaotic Good", "Lawful Evil"];
  const backgrounds = ["Noble", "Acolyte", "Soldier", "Outlander", "Hermit"];
  const quests = [
    "retrieve a legendary artifact",
    "avenge the death of a loved one",
    "protect the kingdom from a rising threat",
    "uncover the hidden truths of their ancestry",
    "break a curse that has haunted their family for generations",
  ];
  const enemies = [
    "an ancient dragon",
    "a ruthless warlord",
    "a mysterious cult",
    "a rival adventurer",
    "a powerful sorcerer",
  ];
  const companions = [
    "a loyal squire",
    "an enigmatic wizard",
    "a fearless ranger",
    "a mischievous rogue",
    "a wise elder",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  const randomRace = races[Math.floor(Math.random() * races.length)];
  const randomAlignment = alignments[Math.floor(Math.random() * alignments.length)];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const randomQuest = quests[Math.floor(Math.random() * quests.length)];
  const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  const randomCompanion = companions[Math.floor(Math.random() * companions.length)];

  const templates = [
    `${randomName}, a ${randomRace} ${randomClass}, grew up in a ${randomBackground} life. Guided by ${randomAlignment} ideals, ${randomName} set off on a grand quest to ${randomQuest}. Along the way, they encountered ${randomCompanion}, who would become a steadfast companion on their journey. But danger lurked in every corner, as ${randomEnemy} pursued them relentlessly, determined to thwart their mission. With each battle, ${randomName} grew stronger, their resolve unshaken.`,
    `In the heart of the kingdom, ${randomName} was known as a ${randomRace} ${randomClass}. Their journey began as an ordinary ${randomBackground}, but a twist of fate set them on a dangerous quest to ${randomQuest}. With ${randomCompanion} by their side, they faced untold dangers. Their greatest foe was ${randomEnemy}, who sought to end their quest before it began. But ${randomName}'s ${randomAlignment} nature kept them on the path of righteousness, ensuring that no enemy could stand in their way.`,
    `${randomName} never expected their life as a ${randomBackground} to lead them to adventure, but destiny had other plans. As a ${randomRace} ${randomClass}, ${randomName} became the kingdom's last hope in the battle to ${randomQuest}. Their journey was fraught with peril, especially as ${randomEnemy} became a constant threat. However, with the guidance of ${randomCompanion}, ${randomName} pressed on, driven by their ${randomAlignment} beliefs.`,
    `Once an unassuming ${randomBackground}, ${randomName}, the ${randomRace} ${randomClass}, found themselves entangled in a quest to ${randomQuest}. Alongside ${randomCompanion}, they faced not just external threats but also inner turmoil as ${randomEnemy} pursued them at every turn. It was their ${randomAlignment} principles that held them together, pushing them forward to complete the mission that fate had bestowed upon them.`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};

export function CharactersIndexPage() {
  const [backstory, setBackstory] = useState("");

  const generateNewBackstory = () => {
    const newBackstory = generateRandomBackstory();
    setBackstory(newBackstory);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/01/04/12/26/castle-7696633_1280.jpg")' }}
    >
      {/* Overlay to make content more readable */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-4xl mx-auto p-10 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-white">
          <h1 className="text-5xl font-bold text-white font-cinzel mb-8 text-center">Random Character Backstory</h1>

          {/* Button to generate a new random backstory */}
          <div className="text-center mb-6">
            <button
              onClick={generateNewBackstory}
              className="py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md transition-transform duration-300 transform hover:scale-105"
            >
              Generate Random Backstory
            </button>
          </div>

          {/* Display the generated backstory */}
          {backstory && (
            <div className="bg-gray-700 p-6 rounded-md shadow-md">
              <p className="text-lg leading-relaxed">{backstory}</p>
            </div>
          )}
        </div>

        {/* Foreground Image for a unique touch */}
        <div className="absolute bottom-10 right-10 w-64 h-64 opacity-90">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/07/21/43/ai-generated-7836458_1280.jpg"
            alt="Fantasy Artwork"
            className="w-full h-full object-cover transform -rotate-6 scale-110 transition duration-500 hover:scale-125 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
}
