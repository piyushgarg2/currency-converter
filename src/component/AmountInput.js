// AmountInput.js
import React from 'react';
import toast from 'react-hot-toast'
const AmountInput = ({ value, onAmountChange }) => {
 

  const handleChange = (e) => {
    const newValue = +e.target.value;
    if (!isNaN(newValue)) {
      onAmountChange(parseFloat(newValue));
    }
        else toast.error('Invalid Input')
        
  }
    
  

  return (
    <div style={{margin:"10px"}}>
      <label style={{fontSize:"23px"}}>Amount: </label>
      <input type="text" value={value} onChange={handleChange} style={{padding:"8px",margin:"17px 0px 17px 0px",fontSize:"23px",width:"100%"}} />
    </div>
  );
};

export default AmountInput;
