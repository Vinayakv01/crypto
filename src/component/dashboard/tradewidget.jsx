import React, { useEffect } from 'react';

const TradingViewWidget = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview_widget',
        autosize: true,
        symbol: symbol,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
      });
    };
    document.getElementById('tradingview-widget-container').appendChild(script);
  }, [symbol]);

  return (
    <div
      id="tradingview-widget-container"
      style={{
        height: '600px',
        marginTop: '19px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <div id="tradingview_widget" style={{ height: '100%' }}></div>
    </div>
  );
};

export default TradingViewWidget;
