import React from "react";
import "./App.css";
import Dictonary from "./Dictonary";

export default function App() {
  return (
    <div className="App">
      <div>
        <Dictonary defaultKeyword="sunset" />
      </div>
    </div>
  );
}
