import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    console.log('Total Expenses:', totalExpenses);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);
        setNewBudget(updatedBudget);
    };

    const handleBudgetBlur = () => {
        if (newBudget > 20000) {
            alert('Budget cannot exceed £20,000');
            setNewBudget(budget); // Revert to previous valid budget
            return;
        }

        if (newBudget < totalExpenses) {
            alert(`Budget cannot be less than the total expenses of £${totalExpenses}`);
            setNewBudget(budget); // Revert to previous valid budget
            return;
        }

        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    const handleStepChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        if (updatedBudget > 20000) {
            alert('Budget cannot exceed £20,000');
            return;
        }

        if (updatedBudget < totalExpenses) {
            alert(`Budget cannot be less than the total expenses of £${totalExpenses}`);
            return;
        }

        setNewBudget(updatedBudget);
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={newBudget}
                style={{ marginLeft: '2rem', width: '100px' }}
                onChange={handleBudgetChange}
                onBlur={handleBudgetBlur}
                step="10"
                onKeyDown={(event) => {
                    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                        handleStepChange(event);
                    }
                }}
            />
        </div>
    );
};

export default Budget;
