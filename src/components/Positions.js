export function Positions(props) {
  return (
    <div className="positions">
      <table className="positions-table">
        <caption>Open Positions</caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Market Value</th>
            <th>Average Cost</th>
            <th>Total Cost</th>
            <th>Change</th>
            <th>Change %</th>
          </tr>
          <tr>
            <td>AMZN</td>
            <td>5</td>
            <td>$500</td>
            <td>$2000</td>
            <td>$20400</td>
            <td>+500.35</td>
            <td>+45.06%</td>
            <td><button className="red-button">X</button></td>
          </tr>
          <tr>
            <td>AMZN</td>
            <td>5</td>
            <td>$500</td>
            <td>$2000</td>
            <td>$20400</td>
            <td>+500.35</td>
            <td>+45.06%</td>
            <td><button className="red-button">X</button></td>
          </tr>
          <tr>
            <td>AMZN</td>
            <td>5</td>
            <td>$500</td>
            <td>$2000</td>
            <td>$20400</td>
            <td>+500.35</td>
            <td>+45.06%</td>
            <td><button className="red-button">X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
