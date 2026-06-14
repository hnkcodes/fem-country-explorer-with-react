import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const handleMode = function () {
    setDark((prev) => !prev);
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Header handleMode={handleMode} dark={dark} />
      <SearchResult />
    </div>
  );
}

export default App;
