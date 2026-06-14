export default function Header({ handleMode, dark }) {
  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      <button className="header-toggle" onClick={handleMode}>
        {!dark ? (
          <ion-icon name="moon-outline" aria-hidden="true"></ion-icon>
        ) : (
          <ion-icon name="sunny-outline" aria-hidden="true"></ion-icon>
        )}
        {!dark ? "Dark mode" : "Light mode"}
      </button>
    </header>
  );
}
