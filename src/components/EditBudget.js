import React, { useState } from 'react'

const EditBudget = ({handleSaveClick, budget}) => {

 const [value, setValue] = useState(budget)

  return (
    <>
    <input 
        type="number" 
        required='required'
        class='form-control mr-3'
        id='name'
        value={value}
        onChange={(event) => setValue(event.target.value)}
    />
    <button
        type='button'
        class='btn btn-primary'
        onClick={() => handleSaveClick(value)}
    >
        Save
    </button>
    </>
  )
}

export default EditBudget