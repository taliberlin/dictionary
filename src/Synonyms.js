import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        Synonym(s):
        <ul>
          {props.synonyms.map(function (synonym, index) {
            if (index < 10) {
              return (
                <div key={synonym}>
                  <li>{synonym}</li>
                </div>
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
