import React from "react";
import "./Coins.css";

function Coins({ name, price, symbol, marketcap, volume, image, priceChange }) {
  return (
    <div className="coins">
      <div className="coins__row">
        <div className="coins__coin">
          <img src={image} alt={name} />
          <h1>{name}</h1>
          <p className="coins__symbol">{symbol}</p>
        </div>
        <div className="coins__data">
          <p className="coins__price">£{price}</p>
          <p className="coins__volume">£{volume.toLocaleString()}</p>
          <p
            className={`coins__percent ${
              priceChange < 0 ? `coin__red` : `coin__green`
            }`}
          >
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
