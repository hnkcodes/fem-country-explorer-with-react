export default function Input({ onSearch }) {
  return (
    <div className="input-wrapper">
      <ion-icon name="search-outline" className="input-icon"></ion-icon>
      <input
        type="text"
        placeholder="search for a country..."
        onChange={onSearch}
        className="input"
      />
    </div>
  );
}
