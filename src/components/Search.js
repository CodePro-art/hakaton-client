import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search(props) {
  return (
    <>
      <div className="searchContainer">
        <div className="searchBox">
          <label className="searchLabel searchText">Enter url : </label>
          <br></br>
          <input
            className="search"
            onChange={(e) => props.search(e.target.value)}
            name="name"
            value={props.data}
            type="text"
          />
        </div>
        <div className="langBox">
          <span className="searchText">Choose a language : </span>
          <select
            className="select"
            onChange={(e) => props.lang(e.target.value)}
            name="lang"
            id="lang"
          >
            <option value="english">English</option>
            <option value="arabic">عرب</option>
            <option value="russian">Русский</option>
            <option value="hebrew">עברית</option>
          </select>
          <div className="sendBtn" onClick={() => props.send()}>
            Translate
          </div>
          <p>Choosed language: {props.dataLang}</p>
        </div>
      </div>
    </>
  );
}

export default Search;
