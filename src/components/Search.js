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
          <span className="searchText">Translate to:
            <select className="select" onChange={(e) => props.lang(e.target.value)} name="lang" id="lang" >
              <option value="english">English</option>
              <option value="arabic">عرب</option>
              <option value="russian">Русский</option>
              <option value="hebrew">עברית</option>
            </select>
          </span>
          <butto className="sendBtn" onClick={() => props.send()}>
            Translate
          </butto>
        </div>
      </div>
    </div>
  );
}

export default Search;
