import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <span>Opposite:</span>
        <div>
          {props.antonyms.map(function (antonym, index) {
            if (index < 10) {
              return <div key={antonym}> {antonym}</div>;
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
