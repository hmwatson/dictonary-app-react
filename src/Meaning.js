import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <section>
      <div className="meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <h5> definition</h5>
        {props.meaning.definitions.map(function(definition, index) {
          if (index < 3) {
            return (
              <div key={index}>
                <ul className="list">
                  <li>{definition.definition}</li>
                  <em>{definition.example}</em>
                </ul>
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
    </section>
  );
}
