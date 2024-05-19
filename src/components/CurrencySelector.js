import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    };

    return (
        <div className='alert alert-info' style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem' }}>
            <span>Select Currency: </span>
            <select
                value={currency}
                onChange={handleCurrencyChange}
                style={{ marginLeft: '1rem' }}
            >
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;