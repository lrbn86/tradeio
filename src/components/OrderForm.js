import { useState } from 'react';

export function OrderForm(props) {

  const [orderFormState, setOrderFormState] = useState({
    "side": 'buy',
    "order-type": 'market-order',
    'limit-price': '',
    "shares-amount": 0,
  });

  
  function handleFormSubmitEvent(event) {
    event.preventDefault();
  }
  
  function handleFormChangeEvent(event) {

    const name = event.target.name;
    const value = event.target.value;

    setOrderFormState({
      ...orderFormState,
      [name]: value,
    });

  }

  return (
    <form className="order-form" action="" onSubmit={handleFormSubmitEvent} onChange={handleFormChangeEvent}>
      <div className="form-group">
        <div>
          <input type="radio" name="side" id="buy" value="buy" defaultChecked />
          <label htmlFor="buy">Buy</label>
        </div>
        <div>
          <input type="radio" name="side" id="sell" value="sell" />
          <label htmlFor="sell">Sell</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="order-type">Order Type</label>
        <select name="order-type" id="order-type">
          <option value="market-order">Market Order</option>
          <option value="limit-order">Limit Order</option>
        </select>
      </div>
      {
        orderFormState["order-type"] === 'limit-order' && 
        (
        <div className="form-group">
          <label htmlFor="limit-price">Limit Price</label>
          <input className="order-input" name="limit-price" id="limit-price" type="text" placeholder="$0.00" defaultValue={orderFormState["limit-price"]} required autoComplete='off'/>
        </div>
        )
      }
      <div className="form-group">
        <label htmlFor="shares-amount">Shares</label>
        <input className="order-input" name="shares-amount" id="shares-amount" type="text" placeholder="0"  required autoComplete='off'/>
      </div>
      <div className="form-group">
        <span>Estimated Cost</span>
        <span>$10</span>
      </div>
      <div className="form-group form-submit-button">
        <button className={`submit ${ orderFormState["side"] === 'buy' ? 'green-button' : 'red-button'}`}>{orderFormState["side"].toUpperCase()}</button>
      </div>
      <div className="buying-power-info">
        $<span>3.35</span> buying power available
      </div>
    </form>
  );

}
