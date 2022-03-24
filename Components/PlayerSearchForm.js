import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function PlayerSearchForm({ searchHandler }) {
  return (
    <Form onSubmit = {(e) => displaySearchParam(e)} className = {Layout.form}>
    <Form.Group className = {Layout.formGroup}>
        <Form.Label className = {Layout.formLabel}>Search for a Player</Form.Label>
        <Form.Control type = "text" placeholder = "Russell Westbrook"  value = { searchParam } onChange = { updateSearchParam } className = {Layout.formControl} />
    </Form.Group>
    <Button type = "submit" variant = "outline-dark" className = {Layout.SearchButton}>Search</Button>
</Form>
  )
}
