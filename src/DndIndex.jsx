export function DndIndex({ characters, onShow }) {
  return (
    <div>
      {characters.map((character, index) => (
        <div key={index}>
          <h2>{character.name}</h2>
          <p>Class: {character.class_name}</p>
          <p>Race: {character.race}</p>
          <button onClick={() => onShow(character)}>More info</button>
        </div>
      ))}
    </div>
  );
}
