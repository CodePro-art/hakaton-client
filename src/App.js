import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [searches, setSearches] = useState([]);
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("");
  const sendSearch = async () => {
    console.log("Sending search");
    try {
      const result = await axios.post("/url", {
        url: search,
        language: lang,
      });
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
        data={data}
        send={sendSearch}
        lang={setLang}
      />
      <Display data={data} />
    </div>
  );
}

export default App;
