import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}
