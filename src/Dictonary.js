import React, { useState } from "react";
import axios from "axios";
import "./Dictonary.css";
import Results from "./Results";

export default function Dictonary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictonary">
        <form className="search-box" onSubmit={handleSubmit}>
          <input
            className="type-box"
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
