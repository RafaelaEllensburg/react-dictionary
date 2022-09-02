import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>The Foodie Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group-prepend">
              <span className="input-group">
                <button className="btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass fa-lg"></i>
                </button>
                <input
                  type="search"
                  className="form-control border-right-0 border border-light"
                  autoFocus={true}
                  onChange={handleKeywordChange}
                  placeholder="Which food or drink do you want to look up?"
                  defaultValue={props.defaultKeyword}
                />
              </span>
            </div>
          </form>
          <div className="hint">Now trending: barbecue, wine, vegan</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
