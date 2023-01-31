import React from "react";
import Dictonary from "./Dictonary";
import "./fonts/Gallient.ttf";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <i className=" book fa-solid fa-book-open fa-spin"></i>
        <h1>
         dictionary
        </h1>
        <Dictonary defaultKeyword="moon" />
      </div>
    </div>
  );
}
