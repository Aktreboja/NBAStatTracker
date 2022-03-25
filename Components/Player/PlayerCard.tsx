import React from 'react'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import styles from './Player.module.scss'
import { PlayerCardProps } from '../../Types/Player'

export default function PlayerCard( { ...playerData }:  PlayerCardProps ) {
    // NBA player Non-stat Type data
    let { playerID, teamId, nbaDebutYear, jersey } = playerData
    // NBA Stat data
    let { first_name, last_name, position, heightFeet, heightInches, weightPounds } = playerData
    let { pickNum, roundNum } = playerData.draft

    let playerImage = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerID}.png`
    let teamLogoUrl = `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`

  return (
    <Card className = {styles.Card}>
    <Container className = {styles.imageWrapper}>
        <div className= {styles.logoWrapper}>
            <Image className={styles.logo} src = {teamLogoUrl} layout = "fill" alt = {`${first_name} ${last_name}`} />
        </div>
        <Image className={styles.playerImage} src = {playerImage}  width = { 260 } height = { 190 } alt = {`${first_name} ${last_name}`} />
    </Container>
    <Card.Body className = {styles.metaData}>
        <Card.Title className = {styles.playerName}>{ first_name } { last_name } (#{jersey}) </Card.Title>
        <Card.Text><strong>Position</strong> { position }</Card.Text>
        <Card.Text><strong>Height: </strong> { heightFeet } &lsquo; { heightInches } &lsquo;&lsquo;</Card.Text>
        <Card.Text><strong>Weight:</strong> { weightPounds } lbs</Card.Text>
        <Card.Text><strong>Draft:</strong> {roundNum} round, {pickNum} pick</Card.Text>
        <Card.Text><strong>Debut Year:</strong> { nbaDebutYear }</Card.Text>
    </Card.Body>
</Card>
  )
}
