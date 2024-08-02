

function initOnReady() {
  var widget = window.tvWidget = new TradingView.widget({
    library_path: "https://charting-library.tradingview-widget.com/charting_library/",
    // debug: true, // uncomment this line to see Library errors and warnings in the console
    fullscreen: true,
    symbol: 'AAPL',
    interval: '1D',
    container: "tv_chart_container",
    datafeed: new Datafeeds.UDFCompatibleDatafeed("https://demo-feed-data.tradingview.com"),
    locale: "en",
    disabled_features: [],
    enabled_features: [],
  });
};

window.addEventListener('DOMContentLoaded', initOnReady, false);



export default initOnReady;