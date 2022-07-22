import * as React from "react";
import "../css/main.css";
import { fetchExchangeRates } from "../ExRates/ExRates";
import Currency from "./currency.js";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Main() {
  const [rates, setRates] = React.useState(null);
  const [currencyBase, setcurrencyBase] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    let componentMounted = true;
    const getExchangeRates = () => {
      //backend
      fetchExchangeRates()
        .then((data) => {
          console.log("Exchange Rate:", data);
          if (componentMounted) {
            setRates(data.rates);
            setcurrencyBase(data.base);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getExchangeRates();

    return () => {
      componentMounted = false;
    };
  }, []);

const goToWallet = () => {
    navigate('/wallet');
 }

 const goToTransaction = () => {
  navigate('/transaction');
}

  return (
    <div className="main-exrate">
      <h1>Exchange Rates</h1>
      <Button type='submit'onClick={goToWallet} >Wallet</Button>
      <Button type='submit' onClick={goToTransaction}>Transaction</Button>
      {rates
        ? Object.keys(rates).map((key) => (
            <Currency
              exchangeRateSymbol={key}
              exchangeRate={rates[key]}
              currencyBase={currencyBase}
            />
          ))
        : []}
    </div>
  );
}
