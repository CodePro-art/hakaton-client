import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState(
    "https://www.adamtsair.co.il/%d7%94%d7%90%d7%9c%d7%95%d7%a3/"
  );
  // const [searches, setSearches] = useState([]);
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("");
  // const [input, setInput] = useState("");

  const sendSearch = async () => {
    console.log("Sending search");
    try {
      const result = await axios.post("http://localhost:3001/url", {
        url: search,
        language: lang,
      });
      console.log("in react app, this is the data:");
      console.log(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <div className="app">
      <Navbar />

      <Search
        search={setSearch}
        dataLang={lang}
        data={search}
        send={sendSearch}
        lang={setLang}
      />
      <Display data={data} />
    </div>
  );
}

export default App;
