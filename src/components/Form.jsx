import React, { useState } from 'react'
import Grid from './Grid';

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);
  
    const generateID = () => Math.round(Math.random() * 1000);
  
    const handleSave = () => {
      if (!desc || !amount) {
        alert("Informe a descrição e o valor!");
        return;
      } else if (amount < 1) {
        alert("O valor tem que ser positivo!");
        return;
      }
  
      const transaction = {
        id: generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
      };
  
      handleAdd(transaction);
  
      setDesc("");
      setAmount("");
    };
  

  return (
    <>
    <form className='style-form'>
        <div className='style-form-items'>
            <label className='style-form-label'>Descrição</label>
            <input 
            className='style-form-input'
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}></input>
        </div>

        <div className='style-form-items'>
            <label className='style-form-label'>Valor</label>
            <input 
            className='style-form-input'
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}>
            </input>
        </div>

        <div className='style-form-radio'>
            <input 
            className='style-form-input'
            type="radio"
            id='rIncome'
            defaultChecked
            name='group1'
            value={desc}
            onChange={()=> setExpense(!isExpense)}>
            </input>
            <label className='style-form-label' htmlFor=''>Entrada</label>
            <input 
            className='style-form-input'
            type="radio"
            id='rExpenses'
            name='group1'
            value={desc}
            onChange={()=> setExpense(!isExpense)}>
            </input>
            <label className='style-form-label' htmlFor=''>Saída</label>
        </div>

            <button onClick={handleSave} className='style-form-btn'>Add</button>
    </form>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form