import React from 'react';

const TradingApp = () => {
    return (
        <div className="bg-gray-100 pt-20 md:pt-10 min-h-screen">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="flex justify-between items-center py-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <input className="bg-white rounded-full px-4 py-2 w-48 md:w-64 lg:w-96" placeholder="Enter keyword" />
                    <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    </div>
                </header>

                <div className="lg:flex lg:space-x-8">
                    <div className="w-w-2/3 lg:w-screen">
                        {/* Savings Account Banner */}
                        <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
                            <h2 className="text-xl md:text-2xl font-bold mb-2">ENJOY UP TO</h2>
                            <p className="mb-2">10% P.A interest rate</p>
                            <p className="mb-4">Risk-free</p>
                            <button className="bg-white text-blue-600 px-4 py-2 rounded-full">OPEN SAVINGS ACCOUNT</button>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                            {['My bonus', 'Demo', 'Mission', 'Calculator'].map((action, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full mb-1 ${['bg-red-500', 'bg-orange-500', 'bg-green-500', 'bg-blue-500'][index]}`}></div>
                                    <span className="text-xs md:text-sm">{action}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trading Options */}
                        <div className="flex justify-between text-sm md:text-base mb-4 overflow-x-auto">
                            {['Recommend', 'My List', 'Forex', 'Crypto', 'Metals', 'Ind'].map((option, index) => (
                                <span key={index} className={`whitespace-nowrap px-2 ${index === 0 ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>{option}</span>
                            ))}
                        </div>

                        {/* Trading Pairs */}
                        <div className="space-y-2">
                            {['XAUUSD', 'EURUSD', 'BTC/USDT Max', 'GBPUSD', 'NSDQ'].map((pair, index) => (
                                <div key={index} className="flex justify-between items-center bg-white rounded-lg p-2">
                                    <span className="w-1/4 md:w-1/6 font-medium">{pair}</span>
                                    {/* Trading buttons */}
                                    <div className="flex items-center w-3/4 md:w-5/6 space-x-2 justify-end">
                                        <div className="bg-green-500 text-white rounded px-2 md:px-6 py-1">{['1869.61', '1.05345', '2323.80', '13.2140', '15167.85'][index]}</div>
                                        <div className="bg-gray-200 rounded-full px-2 py-1 text-xs">{[321, 321, 321, 321, 321][index]}</div>
                                        <div className="bg-red-500 text-white rounded px-2 md:px-6 py-1">{['1869.38', '1.05345', '2613.70', '13.21831', '15166.15'][index]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="w-1/3 lg:w-full md:pt-4 mt-4 lg:mt-0">
                            {/* Additional content for larger screens */}
                            <div className="bg-white rounded-lg p-4">
                                <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
                                {/* Add market overview content here */}
                            </div>
                        </div>
                    </div>


                </div>

                {/* Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden">
                    <div className="flex justify-between px-4 py-2">
                        {['Markets', 'Position', 'Discover', 'Profile'].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-6 h-6 bg-gray-300 rounded-full mb-1"></div>
                                <span className="text-xs">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingApp;
