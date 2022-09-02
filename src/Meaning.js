import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div className="definition">{definitions.definition}</div>
            <div className="example">{definitions.example}</div>
          </div>
        );
      })}
    </div>
  );
}
