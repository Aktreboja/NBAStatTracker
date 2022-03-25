import React from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'

export default function PlayerSearchCard() {
  return (
    <Link href = {`/${nameSearch}`} key = {key} passHref >
        <Card className = {styles.searchResult}>
            <Card.Title>{ first_name } { last_name }</Card.Title>
            <Card.Text>{ team.full_name }</Card.Text>
        </Card>
    </Link>
  )
}
