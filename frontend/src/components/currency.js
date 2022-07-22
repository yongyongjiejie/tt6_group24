import styles from '../App.css'

const currency = ({ExchangeRateSymbol,ExchangeRate}) => {
    
    return ( 
    <div className={styles.card}>
        <span>
            {ExchangeRateSymbol}
        </span>
        <span className={styles.rate}>
            {ExchangeRate}
        </span>
    </div>
    );
};

export default currency;