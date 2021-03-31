import React from "react";

export default function Item(props) {
  return (
    <tr key={props.Id}>
      <td id="item">{props.name}</td>
      <td id="left">{props.amount}</td>
      <td>
        <button onClick={() => props.Sub(props.Id)} disabled={props.disabled}>
          -
        </button>
      </td>
      <td>{props.count}</td>
      <td>
        <button onClick={() => props.Add(props.Id)}>+</button>
      </td>
      <td id="right">{props.total}</td>
    </tr>
  );
}
