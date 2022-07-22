import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../css/transaction.css";

export default function Transaction() {
  const [wallet, setWallet] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvertedCurrencyChange = (e) => {
    setConvertedCurrency(e.target.value);
  };

  const handleConvertedAmountChange = (e) => {
    setConvertedAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(
      'A form was submitted with Wallet :"' +
        wallet +
        '" ,Currency :"' +
        currency +
        '" and Amount :"' +
        amount +
        '"and Converted Currency :"' +
        convertedCurrency +
        '"and Converted Amount :"' +
        convertedAmount +
        '"and Description:"' +
        description
    );
    e.preventDefault();
  };
  return (
    <div>
      <header>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3> Create Transaction </h3>
          <label>
            Wallet:
            <select
              value={wallet}
              onChange={(e) => {
                handleWalletChange(e);
              }}
            >
              {" "}
              <option value="multiCurrency">Multi_Currency Account</option>
              <option value="travel">Travel Account</option>
              <option value="trading">Trading Account</option>
            </select>
          </label>
          <br />
          <label>
            Currency:
            <select
              value={currency}
              onChange={(e) => {
                handleCurrencyChange(e);
              }}
            >
              {" "}
              <option value="sgd">SGD</option>
              <option value="cad">CAD</option>
              <option value="usd">USD</option>
            </select>
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                handleAmountChange(e);
              }}
            />
          </label>
          <br />
          <label>
            Converted Currency:
            <select
              value={convertedCurrency}
              required
              onChange={(e) => {
                handleConvertedCurrencyChange(e);
              }}
            >
              {" "}
              <option value="sgd">SGD</option>
              <option value="cad">CAD</option>
              <option value="usd">USD</option>
            </select>
          </label>
          <br />
          <label>Converted Amount:</label>
          <br />
          <input
            type="text"
            value={convertedAmount}
            required
            onChange={(e) => {
              handleConvertedAmountChange(e);
            }}
          />
          <br />
          <label>Reason for conversion:</label>
          <br />
          <input
            type="text"
            value={description}
            required
            onChange={(e) => {
              handleDescriptionChange(e);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}
