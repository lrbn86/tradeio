import { Stock } from "./Stock";

export function Watchlist(props) {
  return (
    <div className="watchlist">
      <h1>Watchlist</h1>
      { props.watchlist.map((d) => <Stock symbol={ d.symbol } currentPrice={ d.currentPrice } />) }
    </div>
  );
}
