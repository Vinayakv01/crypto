import React, { useState } from 'react';
import TradingViewWidget from './tradewidget';
import TradeForm from './buysell';
import CryptoData from './cryptodata';
import UserCoins from './usercoins';

const Dashboard = () => {
    const [selectedCoin, setSelectedCoin] = useState('BTCUSD');

    const handleCoinSelect = (symbol) => {
        setSelectedCoin(symbol);
    };

    return (
        <div className="pt-24 bg-[#111826] h-full p-4">
            <div className="flex flex-col md:flex-row rounded-3xl bg-[#212939] gap-4">
                <div className="w-full md:w-1/4 p-10 mt-3">
                    <CryptoData onCoinSelect={handleCoinSelect} />
                </div>
                <div className="w-full md:w-3/4 p-8">
                    <TradingViewWidget symbol={selectedCoin} />

                </div>

            </div>


            <div className="mt-4 flex flex-row space-x-4">
                <div className="w-1/2 ">
                    <UserCoins />
                </div>
                <div className="w-1/2">
                    <TradeForm symbol={selectedCoin} />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
