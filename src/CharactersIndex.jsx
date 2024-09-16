import React from "react";

export function CharactersIndex({ characters }) {
  if (characters.length === 0) {
    return <p>No characters available.</p>;
  }

  return (
    <ul className="space-y-4">
      {characters.map((character, index) => (
        <li key={index} className="bg-gray-700 p-4 rounded-md">
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <p>Class: {character.class_name}</p>
          <p>Race: {character.race}</p>
          <p>Level: {character.level}</p>
          <p>Background: {character.background}</p>
          <p>Alignment: {character.alignment}</p>
          <p>Backstory: {character.backstory}</p>
        </li>
      ))}
    </ul>
  );
}
