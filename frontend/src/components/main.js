import * as React from 'react'
import '../css/main.css'
import { fetchExchangeRates } from '../ExRates/ExRates';
import Currency from './Currency.js'
export default function Main() {

    const [rates,setRates] = React.useState(null)
    const [currencyBase, setcurrencyBase] = React.useState('')

    React.useEffect(()=>{
        let componentMounted=true;
        const getExchangeRates = () =>{
            //backend
            fetchExchangeRates()
            .then((data) => {
                console.log('Exchange Rate:', data)
                if(componentMounted){
                    setRates(data.rates);
                    setcurrencyBase(data.base)
                }
            })
            .catch((err)=>{
                console.log(err)
            });
        };
        
        getExchangeRates();

        return()=>{
            componentMounted = false
        };
    },[]);

  return (
    <div>
      <h1>
        Exchange Rates
      </h1>
      {rates ? Object.keys(rates).map((key)=>(
      <Currency exchangeRateSymbol={key}
                exchangeRate={rates[key]}
                currencyBase={currencyBase}
        />
        )): []}
    </div>
  );
}
  
