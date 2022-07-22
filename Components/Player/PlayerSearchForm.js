import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function PlayerSearchForm({ searchHandler, searchParam, paramHandler }) {
  return (
    <Form onSubmit = {(e) => searchHandler(e)} className = "form">
    <Form.Group className = "formGroup">
        <Form.Label className  = "formLabel">Search for a Player</Form.Label>
        <Form.Control type = "text" placeholder = "Russell Westbrook"  value = { searchParam } onChange = { paramHandler} className = "formControl" />
    </Form.Group>
    <Button type = "submit" variant = "outline-dark" className = "searchButton">Search</Button>
</Form>
  )
}
