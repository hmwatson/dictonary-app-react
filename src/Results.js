import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="input">{props.results.word}</h2>
        {props.results.phonetics.length > 0 && (
          <Phonetic phonetic={props.results.phonetics[0]} />
        )}
        {props.results.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
