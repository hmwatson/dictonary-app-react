import React from "react";
import Dictonary from "./Dictonary";
import "./fonts/Gallient.ttf";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div>
          <i className=" book fa-solid fa-book-open fa-spin"></i>
          <h1>dictionary</h1>
          <Dictonary defaultKeyword="moon" />
        </div>
      </div>
      <div className="footer">
        This website was built by Heather Watson and open-sourced on{" "}
        <a
          className="footer-link"
          href="https://github.com/heatherwatson96/dictonary-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <div className="media-links">
        <a
          href="https://www.linkedin.com/in/heather-watson-86a041167/"
          target="_blank"
          rel="noopener noreferrer"
          className="fa-brands media-links"
        >
          <i className="fa-brands media-links fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/heatherwatson96/dictonary-app-react"
          target="_blank"
          rel="noopener noreferrer"
          className="fa-brands media-links"
        >
          <i className="fa-brands media-links fa-github"></i>
        </a>
      </div>
    </>
  );
}
