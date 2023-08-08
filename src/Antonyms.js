import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        <strong>opposite:</strong>
        <div className="row">
          {props.antonyms.map(function (antonym, index) {
            if (index < 10) {
              return (
                <div key={antonym} className="col-4">
                  {" "}
                  '{antonym}'
                </div>
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
