export function Stock(props) {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
  return (
    <div className="position">
      <h2>{ props.symbol }</h2>
      <div className="position-info">
        <span>{ props.shares } shares</span>
        <span>{ formatter.format(props.totalReturn) }</span>
      </div>
    </div>
  );
}
