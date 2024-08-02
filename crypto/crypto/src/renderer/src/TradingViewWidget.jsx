import React, { useEffect, useRef, useState, memo } from 'react';
import Modal from 'react-modal';

const defaultTickers = [
  "BINANCE:GALAUSDT.P",
  "BINANCE:LINKUSDT.P",
  "BINANCE:DOGEUSDT.P",
  "BINANCE:MATICUSDT.P",
  "OANDA:USDJPY",
  "OANDA:EURUSD",
];

const allTickers = [
  "BINANCE:BTCUSD.P",
  "BINANCE:MATICUSDT.P",
  "BINANCE:GALAUSDT.P",
  "BINANCE:DOTUSDT.P",
  "BINANCE:LINKUSDT.P",
  "BINANCE:DOGEUSDT.P",
  "BINANCE:SUIUSDT.P",
  "BINANCE:FTMUSDT.P",
  "OANDA:EURUSD",
  "OANDA:GBPUSD",
  "OANDA:AUDUSD",
  "OANDA:USDJPY",
  "OANDA:USDCAD",
];

const NUMBER_OF_CHARTS = 6;

const TradingViewWidget = memo(({ symbol }) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "1",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      gridColor: "rgba(0, 0, 0, 0.06)",
      hide_top_toolbar: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      calendar: false,
      studies: ["IchimokuCloud@tv-basicstudies", { "inputs": { "showLaggingSpan": false } }],
      studies_overrides: {
        "volume.volume.color.0":"#808000",
        "IchimokuCloud.Kijun-sen.color": "#808000", 
        },
      support_host: "https://www.tradingview.com"
    });
    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%", backgroundColor: "gray" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
});

const App = () => {
  const [symbols, setSymbols] = useState(defaultTickers);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentChartIndex, setCurrentChartIndex] = useState(null);
  const [selectedTicker, setSelectedTicker] = useState('');

  const openModal = (index) => {
    setCurrentChartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const confirmChange = () => {
    if (selectedTicker && currentChartIndex !== null) {
      const newSymbols = [...symbols];
      newSymbols[currentChartIndex] = selectedTicker;
      setSymbols(newSymbols);
      closeModal();
    }
  };

  return (
    <div>
      {symbols.slice(0, NUMBER_OF_CHARTS).map((symbol, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '5px 10px' }}>
            <h2>{symbol}</h2>
            <button onClick={() => openModal(index)}>Change Chart</button>
          </div>
          <TradingViewWidget symbol={symbol} />
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Select a new ticker</h2>
        <select value={selectedTicker} onChange={(e) => setSelectedTicker(e.target.value)}>
          <option value="" disabled>Select a ticker</option>
          {allTickers.map((ticker, index) => (
            <option key={index} value={ticker}>{ticker}</option>
          ))}
        </select>
        <button onClick={confirmChange}>Confirm</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default App;
