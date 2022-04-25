import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const expenses = [
        {
            id: 12121,
            name: "Shopping",
            cost: 50,
        },
        {
            id: 9921,
            name: "Holiday",
            cost: 350,
        },
        {
            id: 7721,
            name: "Transportation",
            cost: 80,
        },
        {
            id: 5421,
            name: "Fuel",
            cost: 120,
        }
    ]
  return (
    <ul className='list-group'>
        {expenses.map((expense) => (
            <ExpenseItem 
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
            />
        ))}
    </ul>
  )
}

export default ExpenseList