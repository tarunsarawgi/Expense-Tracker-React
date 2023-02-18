import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GLobalProvider } from './context/GlobalState';




import './App.css';

function App() {
  return (
    <GLobalProvider>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpenses/>
      <TransactionList />
      <AddTransaction />

    </GLobalProvider>
  );
}

export default App;
