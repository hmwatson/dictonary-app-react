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
        >
          Github
        </a>
      </div>
      <div className="media-links">
        <a
          href="https://www.linkedin.com/in/heather-watson-86a041167/"
          target="_blank"
        >
          <i class="fa-brands linkedin fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/heatherwatson96/dictonary-app-react"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </>
  );
}
