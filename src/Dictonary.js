import React, { useState } from "react";
import axios from "axios";
import "./Dictonary.css";

export default function Dictonary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleKeywordChange);
  }
  function handleKeywordChange(event) {
    console.log(event);
    setKeyword(event.target);
  }

  return (
    <div className="Dictonary">
      <form className="search-box" onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
