import './OrderForm.css';

import { useState } from 'react';

export function OrderForm(props) {

  const [showLimitPrice, setShowLimitPrice] = useState(false);

  function handleOrderTypeEvent(event) {
    const value = event.target.value;
    setShowLimitPrice(value === 'limit-order' ? true : false);
  }

  return (
    <form action="">
      <div>
        <input type="radio" name="buy-sell" id="buy" defaultChecked />
        <label htmlFor="buy">Buy</label>
        <input type="radio" name="buy-sell" id="sell" />
        <label htmlFor="sell">Sell</label>
      </div>
      <label htmlFor="order-type">
        Order Type
        <select name="order-type" id="order-type" onChange={handleOrderTypeEvent}>
          <option value="market-order">Market Order</option>
          <option value="limit-order">Limit Order</option>
        </select>
      </label>
      {
        showLimitPrice && 
        <label htmlFor="limit-price">
          Limit Price <input className="order-input" name="limit-price" id="limit-price" type="text" placeholder="$0.00" />
        </label>
      }
      <label htmlFor="shares-amount">
        Shares <input className="order-input" name="shares-amount" id="shares-amount" type="text" placeholder="0" />
      </label>
      <div>
        Estimated Cost $<span>300</span>
      </div>
      <button>Review Order</button>
      <div>
        <span>$3.35</span> buying power available
      </div>
    </form>
  );

}
