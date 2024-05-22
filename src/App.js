import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            <Budget/>
                        }

                        {
                            <Remaining/>
                        }

                        {
                            <ExpenseTotal/>
                        }

                        {
                            <ExpenseList/>
                        }

                        {
                            <ExpenseItem/>
                        }

                        {
                        <AllocationForm/>}

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
