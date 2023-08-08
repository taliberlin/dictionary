import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="keyword">{props.results.word}</h2>
          <p className="phonetic">/{props.results.phonetic}/</p>
        </section>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            if (index < 7) {
              return (
                <section key={meaning.definition}>
                  <Meaning meaning={meaning} />
                </section>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
