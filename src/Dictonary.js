import React, { useState } from "react";
import axios from "axios";
import "./Dictonary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictonary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictonaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictonaryResponse)
      .catch(function() {
        alert("This is not a word 🥴");
      });

    let pexelsApiKey =
      "563492ad6f9170000100000104663ae2c247449f800144770696fdb3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
            className="type-box form-control shadow bg-white rounded "
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
            placeholder="search..."
          />
          <button
            type="submit"
            className="btn shadow bg-white rounded search-button btn-light "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className=" row gx-5">
          <div className="col-sm-12 box col-md-6 ">
            <div className="white-bg shadow box">
              <Results results={results} />
            </div>
          </div>
          <div className="col-sm-12 box col-md-6 ">
            <div className="white-bg shadow box">
              <Photos photos={photos} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
