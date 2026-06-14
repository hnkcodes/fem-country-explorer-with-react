import { useState } from "react";
import ClickedCountry from "./ClickedCountry";
import Input from "./Input";
import Filter from "./Filter";
import useFetch from "../hooks/useFetch";

export default function SearchResult() {
  const [clickedCountry, setClickedCountry] = useState(null);

  const [filter, setFilter] = useState({ word: "", region: "" });

  const { fetchedData, isError, isLoading } = useFetch(
    "../../public/data.json",
  );

  const handleCountryFilter = function (e, type) {
    if (type === "word") {
      setFilter((prevState) => {
        return {
          ...prevState,
          word: e.target.value.toLowerCase(),
        };
      });
    }

    if (type === "region") {
      setFilter((prevState) => {
        return {
          ...prevState,
          region: e.target.value,
        };
      });
    }
  };

  const countries = fetchedData
    ? fetchedData.filter(
        (country) =>
          country.name.toLowerCase().includes(filter.word) &&
          (filter.region === "" || country.region === filter.region),
      )
    : [];

  const handleClickedCountry = function (countryName) {
    setClickedCountry(countryName);
  };

  const handleResetCountry = function () {
    setClickedCountry(null);
  };

  if (isError) {
    return (
      <main className="main error">
        <p>{isError}</p>
      </main>
    );
  }

  return (
    <main className="main">
      {!clickedCountry && (
        <div className="search-container">
          <Input onSearch={(e) => handleCountryFilter(e, "word")} />

          <Filter onSelect={(e) => handleCountryFilter(e, "region")} />
        </div>
      )}
      {!isLoading && clickedCountry && (
        <ClickedCountry
          onBack={handleResetCountry}
          country={clickedCountry}
          handleClick={handleClickedCountry}
          fetchedData={fetchedData}
        />
      )}
      {isLoading && <p>data loading</p>}

      {!isLoading && !clickedCountry && (
        <section className="countries-section">
          {countries.map((country) => {
            return (
              <article
                key={country.name}
                className="countries-card"
                onClick={() => handleClickedCountry(country.name)}
              >
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="countries-img"
                />
                <div className="country-text">
                  <h2>{country.name}</h2>
                  <ul className="country-list">
                    <li>
                      <span className="strong-text">Population:</span>
                      {country.population}
                    </li>
                    <li>
                      <span className="strong-text">Region: </span>
                      {country.region}
                    </li>
                    <li>
                      <span className="strong-text">Capital: </span>
                      {country.capital}
                    </li>
                  </ul>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
