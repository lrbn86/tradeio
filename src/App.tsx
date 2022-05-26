// import React from 'react';
import './App.css';
import Stock from './component/Stock/Stock';

function App() {

  let portfolioValue: number = 400000;
  let buyingPower: number = portfolioValue;

  return (
    <>
    <header>
      <h1>TRADEIO</h1>
      <p>Stock Trading Simulator</p>
    </header>
    <main>
      <section>
        <h1>{ portfolioValue.toLocaleString('en-us', { style: 'currency', currency: 'USD'}) }</h1>
        <p>Buying Power: <span>{ buyingPower.toLocaleString('en-us', { style: 'currency', currency: 'USD'}) }</span></p>
      </section>
      <section>
        <h1>Positions</h1>
        <Stock ticker="tsla" price="700" shares="5" />
        <Stock ticker="amzn" price="2000" />
        <Stock ticker="msft" price="300.25" />
        <Stock ticker="nvda" price="200.25" />
      </section>
      <section>
        <h1>Watchlist</h1>
        <Stock ticker="tsla" price="700" shares="2" />
        <Stock ticker="amzn" price="2000" shares="" />
        <Stock ticker="msft" price="300.25" />
        <Stock ticker="nvda" price="200.25" />
        <Stock ticker="amd" price="150" />
      </section>
    </main>
    </>
  );
}

export default App;
