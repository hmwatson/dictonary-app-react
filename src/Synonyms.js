import React from "react";
import "./Dictonary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {" "}
        <h3>synonyms</h3>
        {props.synonyms.map(function(synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
