import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>Similar:</span>
        <div>
          {props.synonyms.map(function (synonym, index) {
            if (index < 5) {
              return (
                <div key={synonym} className="synonym-list">
                  {synonym}
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
