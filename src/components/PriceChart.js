import './PriceChart.css';

export function PriceChart(props) {
  return (
    <div className="price-chart">
      <h1>Ticker Symbol</h1>
      <h2>$10000.00</h2>
      <div>
        CHART PLACEHOLDER
      </div>
      <div>
        <div>
          <p>Your market value</p>
          <p>$100.00</p>
          <p>Today's return $<span>10.00(0.01%)</span></p>
          <p>Total return $<span>10.00(0.01%)</span></p>
        </div>
        <div>
          <p>Your average cost</p>
          <p>$10000.00</p>
          <p>Shares <span>200</span></p>
          <p>Portfolio diversity <span>36.86%</span></p>
        </div>
      </div>
    </div>
  );
}
