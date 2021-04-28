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
    setData('loading')
    try {
      const result = await axios.post("http://localhost:3001/url", {
        url: search,
        language: lang,
      });
      console.log("in react app, this is the data:");
      setData(result.data);
    } catch (e) {
      console.log(e.error);
    }
  };

  // Get list of stories
  const getCards = async () => {
    try {
      const result = await axios.get("http://localhost:3001/");
      setCards(result.data);
    } catch (e) {
      console.log(e.error);
    }
  }

  // function that sets the url into the searchbar 
  const sendUrlToSearcbar = url => {
    console.log(url);
    setSearch(url)
  }

  // render cards
  const renderCards = arr => arr.map((card,i) => <Card key={i} src={card.image} title={card.title} url={card.url} sendResult={sendUrlToSearcbar}/>) 

  useEffect(() => {
    getCards();
  }, [])
  
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
      <div className="cards-container">
        {renderCards(cards)}
      </div>
    </div>
  );
}

export default App;
