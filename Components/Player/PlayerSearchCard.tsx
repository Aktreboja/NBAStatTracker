import React from 'react'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import styles from '../Player/Player.module.scss'

export default function PlayerSearchCard({first_name, last_name, team, key}) {
  let nameSearch = first_name.toLowerCase() + '_' + last_name.toLowerCase()
  return (
    <Link href = {`/${nameSearch}`} key = {key} passHref >
        <Card className = {styles.searchResult}>
            <Card.Title>{ first_name } { last_name }</Card.Title>
            <Card.Text>{ team.full_name }</Card.Text>
        </Card>
    </Link>
  )
}
