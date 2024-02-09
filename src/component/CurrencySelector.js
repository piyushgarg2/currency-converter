// CurrencySelector.js
import React from 'react';
import './currencySelector.css'
const CurrencySelector = ({ label, selectedCurrency, onCurrencyChange }) => {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD','INR','AED','AFN','ALL','AMD','ANG','AOA','ARS'
  ,'AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB',"BRL",
  "BSD","BTN","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"
];
  return (
    <div className='container-input'>
      <label>{label}: </label>
      <select value={selectedCurrency} style={{fontSize:"23px",width:"100%",padding:"8px",marginTop:"17px",marginBottom:"17px"}} onChange={(e) => onCurrencyChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
