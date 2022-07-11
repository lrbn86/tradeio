import { Stock } from "./Stock";

export function Positions(props) {
  return (
    <div className="positionsContainer">
      <h1>Positions</h1>
      { props.data.map((d) => <Stock symbol={ d.symbol } shares={ d.shares } totalReturn={ d.totalReturn } />) }
    </div>
  );
}
