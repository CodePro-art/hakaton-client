import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import Card from './components/Card';

function App() {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [lang, setLang] = useState("english");
  const [cards, setCards] = useState([]);

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

  // Get list of stories
  const getCards = async () => {
    try {
      const result = await axios.get("http://localhost:3001/");
      console.log(result);
      setCards(result);
    } catch (e) {
      console.log(e.error);
    }
  }

  // function that sets the url into the searchbar 
  const sendUrlToSearcbar = url => setSearch(url)

  // render cards
  const renderCards = arr => arr.map(card => <Card src={""} title={""} url={""} sendUrl={sendUrlToSearcbar}/>) 
  useEffect(() => {
    getCards();
  }, [])
  return (
    <div className="app">

      <Search
        search={setSearch}
        dataLang={lang}
        data={search}
        send={sendSearch}
        lang={setLang}
      />
      <div className="cards-container">
        {renderCards(cards)}
      </div>
      <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjAVxr9vj1GyDk6pt_xFNlHe_0QwLzkbZng&usqp=CAU" title="Naruto" url="" sendUrl={sendUrlToSearcbar}/>
      <Display data={data} />
    </div>
  );
}

export default App;
