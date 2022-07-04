export function PriceChart(props) {

  return (
    <div className="price-chart">
      <h1>Ticker Symbol</h1>
      <h2>${props.price.toFixed(2)}</h2>
      <div className="chart">
        CHART PLACEHOLDER
      </div>
      {
        props.shares > 0 &&
        (
          <div className="holding-info">
            <div className="market-value">
              <div>
                <span>Market Value</span>
                <span>$100.00</span>
              </div>
              <div>
                <span>Today's return</span>
                <span>10.00(0.01%)</span>
              </div>
              <div>
                <span>Total return</span>
                <span>20.00(0.31%)</span>
              </div>
            </div>
            <div className="average-cost">
              <div>
                <span>Average Cost</span>
                <span>$10000.00</span>
              </div>
              <div>
                <span>Shares</span>
                <span>{ props.shares }</span>
              </div>
              <div>
                <span>Portfolio diversity</span>
                <span>36.86%</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
