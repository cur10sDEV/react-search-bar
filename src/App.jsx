import "./App.css";
import React from "react";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

const App = () => (
  <div className="App">
    <SearchBar placeholder="Enter the Book Name...." data={BookData} />
  </div>
);

export default App;
