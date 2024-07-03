import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bitlogo from "../../assets/bitlogo.png";
import crylogo from "../../assets/xrplogo.png";
import ethlogo from "../../assets/ethlogo.png";
import litelogo from "../../assets/litelogo.png";

const CryptoData = ({ onCoinSelect }) => {
  const [data, setData] = useState([]);
  const logos = {
    bitcoin: bitlogo,
    ethereum: ethlogo,
    litecoin: litelogo,
    ripple: crylogo,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: 'bitcoin,ethereum,litecoin,ripple',
        },
      });
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-lg rounded-2xl p-4 h-full">
      {data.map((coin) => (
        <div
          key={coin.id}
          onClick={() => onCoinSelect(coin.symbol.toUpperCase() + 'USD')}
          className="flex items-center gap-4 cursor-pointer text-black hover:bg-gray-600 hover:text-white p-2 rounded-lg"
        >
          <img src={logos[coin.id]} alt={`${coin.name} logo`} className="w-8 h-8" />
          <div>
            <h3 className=" font-semibold text-xl ">{coin.name}</h3>
            <p className="">${coin.current_price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoData;
