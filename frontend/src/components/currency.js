import '../css/main.css'

const Currency = ({exchangeRateSymbol,exchangeRate, currencyBase}) => {
    
    return ( 
    <div className="card">
        <span>
            {currencyBase} to {exchangeRateSymbol} 
        </span>
        <span className="rate">
            {exchangeRate}
        </span>
    </div>
    );
};

export default Currency;