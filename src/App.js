
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
  const sendSearch = async () => {
    console.log("Sending search");
    try {
      const result = await axios.post("/url", {
        url: search,
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

      <Search search={setSearch} data={search} send={sendSearch} />
      <Display data={data} />

    </div>
  );
}

export default App;
