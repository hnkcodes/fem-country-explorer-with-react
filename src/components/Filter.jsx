export default function Filter({ onSelect }) {
  return (
    <select className="filter" onChange={onSelect}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="Polar">Polar</option>
      <option value="Antarctic">Antarctic</option>
      <option value="Antarctic Ocean">Antarctic Ocean</option>
    </select>
  );
}
