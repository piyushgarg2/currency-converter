// CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css'
import CurrencySelector from './CurrencySelector';
import AmountInput from './AmountInput';

const CurrencyConverter = () => {
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(0);

  const [exchangeRateTarget, setExchangeRateTarget] = useState(null);
  const [exchangeRateSource, setExchangeRateSource] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
       const response =await fetch('https://v6.exchangerate-api.com/v6/8b6109c1df3b02f5786c3ebc/latest/USD')
        const data=  await response.json()
        console.log(data.conversion_rates[targetCurrency])
        setExchangeRateTarget(data.conversion_rates[targetCurrency]);
        setExchangeRateSource(data.conversion_rates[sourceCurrency]);
        setError(null);
      } catch (error) {
        setError('Failed to fetch exchange rate');
      }
    };

    fetchExchangeRate();
  }, [sourceCurrency, targetCurrency]);
  

  const handleSourceCurrencyChange = (currency) => {
    setSourceCurrency(currency);
  };

  const handleTargetCurrencyChange = (currency) => {
    setTargetCurrency(currency);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  return (
    <div className='container'>
      <h1>Currency Converter</h1>
      <CurrencySelector
        label="Source Currency"
        selectedCurrency={sourceCurrency}
        onCurrencyChange={handleSourceCurrencyChange}
      />
      <CurrencySelector
        label="Target Currency"
        selectedCurrency={targetCurrency}
        onCurrencyChange={handleTargetCurrencyChange}
      />
      <AmountInput
        value={amount}
        onAmountChange={handleAmountChange}
        />
     
      {exchangeRateTarget && (
        <p style={{textAlign:"center",margin:"12px",fontSize:"23px"}}>
          {amount} {sourceCurrency} = {(exchangeRateTarget/exchangeRateSource).toFixed(3) * amount} {targetCurrency}
        </p>
      )}
      {error && <p style={{textAlign:"center",margin:"12px",fontSize:"23px"}}>{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
