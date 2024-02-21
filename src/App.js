import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

//api key
//51f6e886

const API_URL = "http://www.omdbapi.com?apikey=51f6e886";

const App = () => {
  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieFlix</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
