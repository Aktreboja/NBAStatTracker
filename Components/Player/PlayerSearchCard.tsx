import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import styles from '../Player/Player.module.scss'

export default function PlayerSearchCard({first_name, last_name, teamName, key, playerId }) {
  let nameSearch = first_name.toLowerCase() + '_' + last_name.toLowerCase()
  return (
    <Link href = {`/players/${nameSearch}`} key = {key} passHref >
        <Card className = {styles.searchResult}>
            <Image src = {`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`} height=  {200} width = {200} alt = {`${first_name} ${last_name}`}/>
          <div style = {{height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Card.Title>{ first_name } { last_name }</Card.Title>
            <p>{teamName}</p>
          </div>
        </Card>
    </Link>
  )
}
