// import React from 'react';
import './App.css';

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
      <h1>{ portfolioValue.toLocaleString('en-us', { style: 'currency', currency: 'USD'}) }</h1>
      <p>Buying Power: <span>{ buyingPower.toLocaleString('en-us', { style: 'currency', currency: 'USD'}) }</span></p>
    </main>
    </>
  );
}

export default App;
