import './App.css';

import { OrderForm } from './components/OrderForm';
import { PriceChart } from './components/PriceChart';
import { Watchlist } from './components/Watchlist';

function App() {

  const ticker = 'TICK';
  const price = 120.00;

  return (
    <>
      <header></header>
      <aside>
        <Watchlist />
      </aside>
      <main>
        <PriceChart ticker={ticker} price={price} shares={120} />
        <OrderForm ticker={ticker} price={price} />
      </main>
      <footer></footer>
    </>
  );

}

export default App;
