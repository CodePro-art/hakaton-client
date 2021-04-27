import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search(props) {
  return (
    <>
      <div className="searchBox">
        <label>Enter url :</label>
        <br></br>
        <input
          className="search"
          onChange={(e) => props.search(e.target.value)}
          name="name"
          value={props.data}
          type="text"
        />
        <div className="sendBtn" onClick={() => props.send()}>
          Translate
        </div>
      </div>
      <p>{props.data}</p>
    </>
  );
}

export default Search;
