import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <section className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          listen
        </a>
        <br />
        {props.phonetic.text}
      </section>
    );
  } else {
    return null;
  }
}
