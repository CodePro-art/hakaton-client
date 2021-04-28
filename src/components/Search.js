import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <div className="searchContainer">
      <div className="search-wrapper">

        <div className="searchBox">
          <label className="searchLabel searchText">Enter url: </label>
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
          <span className="searchText">Translate to:</span>
            <select className="select" onChange={(e) => props.lang(e.target.value)} name="lang" id="lang" >
              <option value="en">English</option>
              <option value="ar">عرب</option>
              <option value="ru">Русский</option>
              <option value="he">עברית</option>
            </select>
          
          <button className="sendBtn" onClick={() => props.send()}>
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
