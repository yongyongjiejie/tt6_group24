import * as React from 'react'
import currency from './currency';
  
const main = () => {

    const [rates,setRates] = React.useState(null);

    React.useEffect(()=>{
        let componentMounted=true;
        const getExchangeRates = () =>{
            //backend
            fetchExchangeRates()
            .then((data) => {
                console.log('Exchange Rate:', data)
                if(componentMounted){
                    setRates(data.rates);
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
    <div className={styles.main}>
      <h1>
        Exchange Rates
      </h1>
      {rates ? Object.keys(rates).map(key=>
      <currency ExchangeRateSymbol={key}
                ExchangeRate={rates[key]}
        />
        ): []}
    </div>
  );
};
  
export default main;