
function Stock({ ticker, price, shares }: any) {
  return (
    <>
    <div className="stock">
      <span>{ ticker.toUpperCase() }</span>
      <span>{ parseFloat(price).toLocaleString('en-us', { style: 'currency', currency: 'USD'}) }</span>
      { parseFloat(shares) > 0 && <span>{ shares } shares</span> }
      <span>0.24%</span>
    </div>
    </>
  )
}

export default Stock;
