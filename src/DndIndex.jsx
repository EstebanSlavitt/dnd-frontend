export function DndIndex({ dnd, onShow }) {
  return (
    <div>
      {dnd.map((character, index) => (
        <div key={index}>
          <h2>{character.name}</h2>
          <p>Class: {character.class_name}</p>
          <p>Race: {character.race}</p>
          <button onClick={() => onShow(dnd)}>More info</button>
        </div>
      ))}
    </div>
  );
}
