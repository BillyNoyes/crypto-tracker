import React, { useState, useEffect } from "react";
import "./App.css";
import Coin from "./Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <div className="app__search">
        <h1 className="app__text">Search a currency</h1>
        <form>
          <input className="app__input" type="text" placeholder="search" />
        </form>
      </div>
      <Coin />
    </div>
  );
}

export default App;
