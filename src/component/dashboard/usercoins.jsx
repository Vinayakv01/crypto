import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCoins = () => {
  const [userCoins, setUserCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserCoins = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get userId from localStorage
        const response = await axios.get(`https://cryptoapi-mdxc.onrender.com/api/userCoins/${userId}`);
        setUserCoins(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user coins:', error);
      }
    };

    fetchUserCoins();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Placeholder while loading data
  }

  return (
    <div className="bg-gray-800 rounded-3xl p-6 shadow-md h-[215px] overflow-y-auto">
        <style>
              {`
            .overflow-y-auto::-webkit-scrollbar {
              display: none;
            }
            `}
              </style>
      <h2 className="text-xl mb-4 text-white">Your Coins</h2>
      {userCoins.length === 0 ? (
        <p className="text-white">You don't have any coins yet.</p>
      ) : (
        <ul className="divide-y divide-gray-700">
          {userCoins.map((coin, index) => (
            <li key={index} className="py-2">
              <span className="text-gray-300">{coin.symbol}</span> -{' '}
              <span className="text-green-400">{coin.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCoins;
