import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TradeForm = ({ symbol }) => {
  const [amount, setAmount] = useState('');

  const handleTrade = async (tradeType) => {
    try {
      const userId = localStorage.getItem('userId'); // Get userId from localStorage
      const response = await axios.post(`https://cryptoapi-mdxc.onrender.com/api/trade/${tradeType}`, {
        userId,
        symbol,
        amount: parseFloat(amount), // Convert amount to float if necessary
      });

      toast.success(`Trade successful: ${response.data.message}`);
      setAmount(''); // Clear amount input after successful trade
    } catch (error) {
      toast.error('Trade failed. Please try again.');
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <div className="md:bg-[rgba(0,0,0,0.3)] backdrop-blur-lg rounded-3xl p-6 md;shadow-md">
      <h2 className="text-xl mb-4 text-black hidden md:block">Trade {symbol}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black">
            Quantity:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 px-3 py-2"
              placeholder="Enter amount"
            />
          </label>
        </div>
        <div className="flex justify-center gap-3 md:gap-0">
          <button
            type="button"
            className="bg-green-500 text-white w-full px-4 py-2 rounded-xl md:rounded-l-xl hover:bg-green-600 focus:outline-none"
            onClick={() => handleTrade('buy')}
          >
            Buy
          </button>
          <button
            type="button"
            className="bg-red-500 text-white w-full px-4 py-2 rounded-xl md:rounded-r-xl hover:bg-red-600 focus:outline-none"
            onClick={() => handleTrade('sell')}
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  );
};

export default TradeForm;














// import React, { useState } from 'react';
// import axios from 'axios';

// const TradeForm = ({ symbol }) => {
//   const [amount, setAmount] = useState('');
//   const [message, setMessage] = useState('');

//   const handleTrade = async (tradeType) => {
//     try {
//       const userId = localStorage.getItem('userId'); // Get userId from localStorage
//       const response = await axios.post(`http://localhost:3000/api/trade/${tradeType}`, {
//         userId,
//         symbol,
//         amount: parseFloat(amount), // Convert amount to float if necessary
//       });

//       setMessage(`Trade successful: ${response.data.message}`);
//     } catch (error) {
//       setMessage('Trade failed. Please try again.');
//       console.error(error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//   };

//   return (
//     <div className="bg-gray-800 rounded-lg p-6 shadow-md">
//       <h2 className="text-xl mb-4 text-white">Trade {symbol}</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-white">
//             Amount:
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="mt-1 block w-full border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 px-3 py-2"
//               placeholder="Enter amount"
//             />
//           </label>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="button"
//             className="bg-green-500 text-white px-4 py-2 rounded-l-xl hover:bg-green-600 focus:outline-none"
//             onClick={() => handleTrade('buy')}
//           >
//             Buy
//           </button>
//           <button
//             type="button"
//             className="bg-red-500 text-white px-4 py-2 rounded-r-xl hover:bg-red-600 focus:outline-none"
//             onClick={() => handleTrade('sell')}
//           >
//             Sell
//           </button>
//         </div>
//       </form>
//       {message && <p className="mt-4 text-center text-white">{message}</p>}
//     </div>
//   );
// };

// export default TradeForm;
