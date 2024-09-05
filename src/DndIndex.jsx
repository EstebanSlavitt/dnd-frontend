export function DndIndex({ dnd }) {
  return (
    <div>
      {dnd.map((character, index) => (
        <div key={index}>
          <h2>{character.name}</h2>
          <p>Class: {character.class_name}</p>
          <p>Race: {character.race}</p>
        </div>
      ))}
    </div>
  );
}
