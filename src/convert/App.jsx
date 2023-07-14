import React, { useState } from 'react';
import { Image } from 'antd';
import "./App.css"

import usdFlag from './assets/usd.png';
import eurFlag from './assets/eur.png';
import audFlag from './assets/aud.png';
import vndFlag from './assets/vnd.png';

function App() {
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('VND');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyFromChange = (e) => {
    setCurrencyFrom(e.target.value);
  };

  const handleCurrencyToChange = (e) => {
    setCurrencyTo(e.target.value);
  };

  const convertCurrency = () => {
    let result = 0;
    if (currencyFrom === 'USD') {
      if(currencyTo==='USD') result = amount;
      if(currencyTo==='VND') result = amount * 23000;
      if(currencyTo==='AUD') result = amount * 1.49;
      if(currencyTo==='EUR') result = amount * 0.92;
    } else if (currencyFrom === 'EUR') {
      if(currencyTo==='USD') result = amount * 1.09;
      if(currencyTo==='VND') result = amount * 25000;
      if(currencyTo==='AUD') result = amount * 1.63;
      if(currencyTo==='EUR') result = amount ;
    } else if (currencyFrom === 'AUD') {
      if(currencyTo==='USD') result = amount * 0.67;
      if(currencyTo==='VND') result = amount * 15000;
      if(currencyTo==='AUD') result = amount;
      if(currencyTo==='EUR') result = amount * 0.61 ;
    } else if (currencyFrom === 'VND') {
      if(currencyTo==='USD') result = amount / 23000;
      if(currencyTo==='VND') result = amount;
      if(currencyTo==='AUD') result = amount / 15000;
      if(currencyTo==='EUR') result = amount / 25000 ;
    }
    setConvertedAmount(result);
  };

  const getFlagImage = (currency) => {
    switch (currency) {
      case 'USD':
        return usdFlag;
      case 'EUR':
        return eurFlag;
      case 'AUD':
        return audFlag;
      case 'VND':
        return vndFlag;
      default:
        return null;
    }
  };

  return (
    <div style={{margin:20, border: "2px solid rgb(14 14 14)", borderRadius: "20px", width: "610px", backgroundColor:"rgb(71 121 173)" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input className='inputAmount' type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div >
          <div>
            <p style={{ fontSize: "20px", marginRight: "5px" }}>From </p>
            <Image preview={false} style={{width:"60px", height:"30px"}} src={getFlagImage(currencyFrom)} /> 
          </div>
          <div>
            <select className='selectCur' value={currencyFrom} onChange={handleCurrencyFromChange}>
              <option>USD</option>
              <option>EUR</option>
              <option>AUD</option>
              <option>VND</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p style={{ fontSize: "20px", marginRight: "5px" }}>To</p>
            <Image preview={false} style={{width:"60px", height:"30px"}}  src={getFlagImage(currencyTo)} /> 
          </div>
          <div>
            <select className='selectCur' value={currencyTo} onChange={handleCurrencyToChange}>
              <option>USD</option>
              <option>EUR</option>
              <option>AUD</option>
              <option>VND</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className='btnConvert' onClick={convertCurrency}>Convert</button>
      </div>
      <p>Converted: {convertedAmount}</p>
    </div>
  );
}

export default App;
