import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import Card from './components/Card';

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

  // function that sets the url into the searchbar 
  const sendUrlToSearcbar = url => setSearch(url)

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
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjAVxr9vj1GyDk6pt_xFNlHe_0QwLzkbZng&usqp=CAU" title="Naruto" url="" sendUrl={sendUrlToSearcbar}/>
      <Display data={data} />
    </div>
  );
}

export default App;
