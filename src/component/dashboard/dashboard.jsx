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
        <div className="pt-28 h-full p-4 font-Montserrat">
            <div className="flex flex-col-reverse md:flex-row rounded-3xl gap-4">
                <div className="w-full md:w-1/4 mt-3 hidden md:block">
                    <CryptoData onCoinSelect={handleCoinSelect} />
                </div>
                <div className="w-full md:w-3/4">
                    <TradingViewWidget symbol={selectedCoin} />
                </div>
            </div>

            <div className="mt-4 flex flex-col-reverse md:flex-row md:space-x-4">
                <div className="md:w-1/2">
                    <UserCoins />
                </div>
                <div className="md:w-1/2">
                    <TradeForm symbol={selectedCoin} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
