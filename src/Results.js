import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
        <section>
          <h2>synonyms</h2>
          {props.results.meanings.map(function (meaning, index) {
            if (meaning.synonyms) {
              return (
                <div key={index}>
                  <h2>{props.results.meaning}</h2>
                  <Synonyms synonyms={meaning.synonyms} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
