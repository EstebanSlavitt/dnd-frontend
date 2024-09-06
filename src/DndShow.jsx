export function DndShow({ dnd }) {
  return (
    <div>
      <h1>Dnd information</h1>
      <p>Name: {dnd.name}</p>
      <p>Url: {dnd.url}</p>
      <p>Width: {dnd.width}</p>
      <p>Height: {dnd.height}</p>
    </div>
  );
}
