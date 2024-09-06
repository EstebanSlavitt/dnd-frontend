export function DndShow({ dnd, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(dnd.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Dnd information</h1>
      <p>Name: {dnd.name}</p>
      <p>Url: {dnd.url}</p>
      <p>Width: {dnd.width}</p>
      <p>Height: {dnd.height}</p>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
