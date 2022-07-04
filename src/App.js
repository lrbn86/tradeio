import './App.css';

import { OrderForm } from './components/OrderForm';
import { PriceChart } from './components/PriceChart';
import { TraderInterface } from './components/TraderInterface';
import { Watchlist } from './components/Watchlist';

function App() {

  const ticker = 'TICK';
  const price = 120.00;

  return (
    <>
      <header></header>
      <main>
        <TraderInterface />
      </main>
      <footer></footer>
    </>
  );

}

export default App;
