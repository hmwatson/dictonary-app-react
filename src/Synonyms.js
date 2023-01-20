import React from "react";
import "./Dictonary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <>
        <h4>synonyms</h4>
        <ul className="Synonyms">
          {props.synonyms.map(function(synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </>
    );
  } else {
    return null;
  }
}
