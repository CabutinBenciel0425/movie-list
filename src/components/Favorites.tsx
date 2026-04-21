function Favorites() {
  return (
    <aside
      style={{ gridArea: "sidebar" }}
      className="border border-border-main"
    >
      <h1>Favorites</h1>

      <ul>
        <li>Inception</li>
        <li>Shutter Island</li>
        <li>Forgotten</li>
        <li>Interstellar</li>
      </ul>
    </aside>
  );
}

export default Favorites;
