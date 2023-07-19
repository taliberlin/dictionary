import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h4>{props.results.phonetic}'</h4>
        <ul>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <li key={index}>
                <Meaning meaning={meaning} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
