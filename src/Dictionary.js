import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function getResponse(response) {
    console.log(response.data);
    alert(
      `The meaning for "${keyword}" is: ${response.data.meanings[0].definition}`
    );
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "o599f3bbe3f722tbacc3ebf3032624a0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Enter city..."
          onChange={handleKeywordChange}
          className="search-bar"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
