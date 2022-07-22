import React from "react";
import "../css/wallet.css";

const data = [
  {
    name: "Multi-Currency Account",
    currency: "SGD",
    amount: 4294.5,
  },
  {
    name: "Travel Account",
    currency: "SGD",
    amount: 4294.5,
  },
  {
    name: "Trading Account",
    currency: "SGD",
    amount: 4294.5,
  },
];

export default function Wallet() {
  return (
    <div className="walletTable">
      <h1 style={{ textAlign: "center" }}>Wallets Owned</h1>
      <table class="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.currency}</td>
                <td>{value.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
