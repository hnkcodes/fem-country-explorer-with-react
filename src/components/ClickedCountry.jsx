export default function ClickedCountry({
  onBack,
  country,
  handleClick,
  fetchedData,
}) {
  const countryData = fetchedData.find(
    (obj) => obj.name.toLowerCase() === country.toLowerCase(),
  );

  if (!countryData) {
    return <p>Country not found.</p>;
  }

  const formattedBorder = fetchedData.filter((country) =>
    countryData.borders?.includes(country.alpha3Code),
  );

  return (
    <>
      <section className="clicked-country-section">
        <button onClick={onBack} className="countryData-back">
          <ion-icon name="arrow-back-outline"></ion-icon>
          Back
        </button>
        <div className="countryData-container">
          <img
            src={countryData.flags.png}
            alt={countryData.flags.alt}
            className="countryData-img"
          />
          <div className="countryData-text">
            <h2 className="countryData-name">{countryData.name}</h2>

            <ul className="countryData-list-left">
              <li>
                <span className="strong-text">Native Name: </span>
                {countryData.nativeName ? countryData.nativeName : "none"}
              </li>
              <li>
                <span className="strong-text">Population: </span>
                {countryData.population}
              </li>
              <li>
                <span className="strong-text">Region: </span>
                {countryData.region}
              </li>
              <li>
                <span className="strong-text">Sub Region: </span>
                {countryData.subregion}
              </li>
              <li>
                <span className="strong-text">Capital: </span>
                {countryData.capital ?? "no capital"}
              </li>
            </ul>

            <ul className="countryData-list-right">
              <li>
                <span className="strong-text">Top Level Domain: </span>
                {countryData.topLevelDomain}
              </li>
              <li>
                <span className="strong-text">Currencies: </span>
                {countryData.currencies?.[0].name ?? "none"}
              </li>
              <li>
                <span className="strong-text">Languages: </span>
                {countryData.languages
                  ? countryData.languages.map((lang) => lang.name).join(", ")
                  : "none"}
              </li>
            </ul>

            <ul className="countryData-map">
              <li>
                <span className="strong-text">Point at map: </span>
                <a
                  className="countryData-map-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/@${countryData.latlng[0]},${countryData.latlng[1]},8z`}
                >
                  map
                </a>
              </li>
            </ul>

            <div className="countryData-border">
              <span className="strong-text">Border: </span>
              {formattedBorder.length > 0
                ? formattedBorder.map((border) => (
                    <button
                      className="countryData-border-btn"
                      key={border.name}
                      onClick={() => handleClick(border.name)}
                    >
                      {border.name}
                    </button>
                  ))
                : "none"}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
