import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; // Import the CSS file

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const handleCurrencyChange = (newCurrency) => {
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className="currency-container">
      <label htmlFor="currency" className="currency-label">
        Choose a currency:
      </label>
      <select
        id="currency"
        value={currency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency"
      >
        <option value="£">Pound (£)</option>
        <option value="$">Dollar ($)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default Currency;