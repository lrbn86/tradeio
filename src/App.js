import './App.css';

import { OrderForm } from './components/OrderForm';
import { PriceChart } from './components/PriceChart';

function App() {

  return (
    <>
      <header></header>
      <main>
        <PriceChart />
        <OrderForm />
      </main>
      <footer></footer>
    </>
  );

}

export default App;
