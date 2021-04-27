import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("english");

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
