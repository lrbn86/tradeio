import './PriceChart.css';

export function PriceChart(props) {

  return (
    <div className="price-chart">
      <h1>Ticker Symbol</h1>
      <h2>${props.price.toFixed(2)}</h2>
      <div>
        CHART PLACEHOLDER
      </div>
      {
        props.shares > 0 &&
        (
          <div className="holding-info">
            <div className="market-value">
              <p>Market Value</p>
              <p>$100.00</p>
              <p>Today's return $<span>10.00(0.01%)</span></p>
              <p>Total return $<span>10.00(0.01%)</span></p>
            </div>
            <div className="average-cost">
              <p>Average Cost</p>
              <p>$10000.00</p>
              <p>Shares <span>{props.shares}</span></p>
              <p>Portfolio diversity <span>36.86%</span></p>
            </div>
          </div>
        )
      }
    </div>
  );
}
