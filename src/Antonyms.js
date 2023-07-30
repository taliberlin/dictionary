import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div>
        Antonym(s):
        <ul>
          {props.antonyms.map(function (antonym, index) {
            if (index < 5) {
              return (
                <div key={antonym}>
                  <li>{antonym}</li>
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
