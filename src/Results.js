import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <p>/{props.results.phonetic}/</p>
        <ul>
          {props.results.meanings.map(function (meaning, index) {
            if (index < 7) {
              return (
                <li key={meaning.definition}>
                  <Meaning meaning={meaning} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
