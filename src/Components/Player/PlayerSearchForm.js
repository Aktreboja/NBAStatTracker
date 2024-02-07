import React from 'react'


export default function PlayerSearchForm({ searchParam, paramHandler }) {
  return (
    <form onSubmit = {(e) => searchHandler(e)} className = "form ">
    <div className = "formGroup">
        <label className  = "formLabel">Search for a Player</label>
        <input 
          type='text' 
          placeholder='Ex: Russell Westbrook'
          value = { searchParam }
          onChange = { paramHandler }
          className=''/>
        {/* <Form.Control type = "text" placeholder = "Ex: Russell Westbrook"  value = { searchParam } onChange = { paramHandler } className = "formControl" /> */}
    </div>
    {/* <Button type = "submit" variant = "outline-dark" className = "searchButton">Search</Button> */}
</form>
  )
}
