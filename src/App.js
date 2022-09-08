import React, {useState, useEffect} from 'react'
import { Header } from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import CriptoApi from './components/CriptoApi';



const App = () => {

  const data = localStorage.getItem("transactions");
    
  const [cripto, setCripto] = useState(false)

  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };


  return (
    <div>
      <Header />
      <Resume income={income} expense={expense} total={total}/>
      <Form 
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <div className='style-div'><div className='value-style'>Sobrou o total de <p className='value-style-p'>{total}</p></div></div>
      <h3 className='invest-style'> Deseja investir em Cripto?</h3>
      <div className='invest-div'>
      <button className='invest-btn' type='button' onClick={()=>setCripto(!cripto)}>Lista</button>
      </div>
      {cripto === false ? null : <CriptoApi />}
    </div>
  );
}

export default App;
