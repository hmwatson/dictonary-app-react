import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          listen
        </a>
        <br />
        <div className="phonetic-text">{props.phonetic.text}</div>
      </div>
    );
  } else {
    return null;
  }
}
