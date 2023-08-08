import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-sm-4">
        <strong>similar:</strong>
        <div className="row">
          {props.synonyms.map(function (synonym, index) {
            if (index < 8) {
              return (
                <div key={synonym} className="col-6">
                  '{synonym}'
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
