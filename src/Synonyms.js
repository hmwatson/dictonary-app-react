import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <>
        <h5 className="title-synonym">synonyms</h5>
        <ul className="synonyms">
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
