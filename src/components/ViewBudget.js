import React from 'react'

const ViewBudget = ({handleEditClick, budget}) => {
  return (
    <>
        <span>Budget: {budget}</span>
        <button type='button' className='btn btn-primary' onClick={handleEditClick}>Edit</button>
    </>
  )
}

export default ViewBudget