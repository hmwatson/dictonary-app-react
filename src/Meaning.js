import React from "react";
import Synonyms from "./Synonyms";
import "./Dictonary.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <h3> definition</h3>
              <p>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
              {definition.synonyms.length > 1 && (
                <Synonyms synonyms={definition.synonyms} />
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
