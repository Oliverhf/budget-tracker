import React, {useContext, useState, useEffect} from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {

    const {expenses} = useContext(AppContext)

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || [])

    const handleChange = e => {
      const searchResults = expenses.filter((filteredExpense) =>
        filteredExpense.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setfilteredExpenses(searchResults)
    }

    useEffect(() => {
        setfilteredExpenses(expenses)
    },[expenses])

  return (
    <>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          placeholder='Type to search...'
          onChange={handleChange}
        />
        <ul className='list-group'>
          {filteredExpenses.map((expense) => (
              <ExpenseItem 
                  key={expense.id}
                  id={expense.id}
                  name={expense.name}
                  cost={expense.cost}
              />
          ))}
        </ul>
    </>
  
  )
}

export default ExpenseList