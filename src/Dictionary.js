import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function getResponse(response) {
    setResults(response.data);
  }

  function getPhotoResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "o599f3bbe3f722tbacc3ebf3032624a0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(getResponse);

    let photoApiKey =
      "bxPMt0l6zNnwvWYS8hxcMjmhy14OKhHS4qfoGeoEgX7yIpTwLYpkGCOg";
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${photoApiKey}` };
    axios.get(photoApiUrl, { headers: headers }).then(getPhotoResponse);
  }

  return (
    <div className="Dictionary">
      <h4>Which word would you like to look up?</h4>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search word..."
          onChange={handleKeywordChange}
          className="search-bar"
        />
      </form>
      <Results results={results} />
    </div>
  );
}
