import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Layout from '../Player/Player.module.scss'

export default function PlayerSearchForm({ searchHandler, searchParam, paramHandler }) {
  return (
    <Form onSubmit = {(e) => searchHandler(e)} className = {Layout.form}>
    <Form.Group className = {Layout.formGroup}>
        <Form.Label className = {Layout.formLabel}>Search for a Player</Form.Label>
        <Form.Control type = "text" placeholder = "Russell Westbrook"  value = { searchParam } onChange = { paramHandler} className = {Layout.formControl} />
    </Form.Group>
    <Button type = "submit" variant = "outline-dark" className = {Layout.SearchButton}>Search</Button>
</Form>
  )
}
