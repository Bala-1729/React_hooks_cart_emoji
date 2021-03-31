import React, { useState } from "react";
import Item from "./item";
import "./app.css";

export default function App() {
  const [amount] = useState([2.25, 1.99, 3.5]);
  const [count, setCount] = useState([0, 0, 0]);
  const [disabled, setDisabled] = useState([true, true, true]);

  function Sub(key) {
    let temp = [...count];
    for (let i = 0; i < 4; i++) if (i === key) temp[i]--;
    setCount(temp);
    if (count[key] === 1) {
      temp = [false, false, false];
      for (let i = 0; i < 3; i++) {
        if (key === i) temp[i] = true;
        else temp[i] = disabled[i];
      }
      setDisabled(temp);
    }
  }

  function Add(key) {
    let temp = [...disabled];
    for (let i = 0; i < 3; i++) {
      if (key === i) temp[i] = false;
    }
    setDisabled(temp);
    temp = [...count];
    for (let i = 0; i < 4; i++) if (i === key) temp[i]++;
    setCount(temp);
  }
  return (
    <div id="container">
      <table>
        <thead>
          <tr>
            <td id="heading">Shopping Cart</td>
          </tr>
          <tr>
            <hr style={{ width: "367%" }} />
          </tr>
        </thead>
        <tbody>
          <Item
            Id={0}
            name="Taco Seasoning"
            amount={"$" + amount[0]}
            count={count[0]}
            total={"Total: $" + count[0] * amount[0]}
            disabled={disabled[0]}
            Sub={Sub}
            Add={Add}
          />
          <Item
            Id={1}
            name="Pinto Beans"
            amount={"$" + amount[1]}
            count={count[1]}
            total={"Total: $" + count[1] * amount[1]}
            disabled={disabled[1]}
            Sub={Sub}
            Add={Add}
          />
          <Item
            Id={2}
            name="Sour Cream"
            amount={"$" + amount[2]}
            count={count[2]}
            total={"Total: $" + count[2] * amount[2]}
            disabled={disabled[2]}
            Sub={Sub}
            Add={Add}
          />
        </tbody>
      </table>
      <p>
        <strong>
          Grand Total: $
          {(
            amount[0] * count[0] +
            amount[1] * count[1] +
            amount[2] * count[2]
          ).toFixed(2)}
        </strong>
      </p>
    </div>
  );
}
