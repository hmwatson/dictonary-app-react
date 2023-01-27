import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <section>
      <div className="Meaning">
        <h3 clssName="title-meaning">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
          if (index < 2) {
            return (
              <div key={index}>
                <h5 className="title-definition"> definition</h5>
                <ul className="list">
                  <li>{definition.definition}</li>
                  <h4>{definition.example}</h4>
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
