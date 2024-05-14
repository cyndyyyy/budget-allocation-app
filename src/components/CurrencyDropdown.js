import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; // Import the CSS file

const CurrencyDropdown = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="currency-container">
      <label htmlFor="currencyDropdown" className="currency-label">
      </label>
      <select
        id="currencyDropdown"
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency-dropdown"
      >
        <option value="$">Currency ($ Dollar)</option>
        <option value="£">Currency (£ Pound)</option>
        <option value="€">Currency (€ Euro)</option>
        <option value="₹">Currency (₹ Ruppee)</option>
      </select>
    </div>
  );
};

export default CurrencyDropdown;