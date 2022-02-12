import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'
import styles from './Players.module.css'

import PageLayout from '../../Components/PageLayout.js'

// Bootstrap Styles
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'



/**
 * Player JSON Guidelines for data map (playerData.*):
 *  1. id: The id of the player
 *  2. first_name: the first name of the player
 *  3. height_feet: the height of the player in feet
 *  4. height_inches: the height of the player in inches
 *  5. last_name: the last name of the player.
 *  6. Position: The position that the player plays
 *  7. Team: {
 *      id: The id of the team.
 *      Abbreviation: The abbreviation of the team that the player is in.
 *      City: The city that the team is from.
 *      Conference: The conference that the team is in East/ West
 *      division: The division the team is in
 *      full_name: The full name of the team
 *      name: The name of the team
 * }
 *  8. weight_pounds: The weight of the player in pounds.
 * 
 */
export default function Index() {
    let [ searchParam, setSearchParam ] = useState('')
    let [ searchResults, setSearchResults ] = useState([])

    const updateSearchParam = event => {
        setSearchParam(event.target.value)
    }

    const displaySearchParam = async (e) => {
        
        e.preventDefault()
        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchParam}`)
        let currentPlayersArray = data.data.filter(player => player.position !== '')
        setSearchResults(currentPlayersArray)
        
    }


    let searchResultsComponent = searchResults.map(({ first_name, last_name , team}, key) => {
        let nameSearch = first_name.toLowerCase() + '_' + last_name.toLowerCase()
        return (
            <Link href = {`/players/${nameSearch}`} key = {key} passHref >
                <Card className = {styles.searchResult}>
                    <Card.Title>{ first_name } { last_name }</Card.Title>
                    <Card.Text>{ team.full_name }</Card.Text>
                </Card>
            </Link>
        )
    })
    
  return <PageLayout>
        <Head>
            <title>StatsCentral | Players</title>
        </Head>
        <h1>StatsCentral | Players</h1>
        <Form onSubmit = {(e) => displaySearchParam(e)}>
            <Form.Group>
                <Form.Label>Search for a Player</Form.Label>
                <Form.Control type = "text" placeholder = "Ex: Kobe Bryant"  value = { searchParam } onChange = { updateSearchParam }/>
            </Form.Group>
            <Button type = "submit" variant = "outline-dark" >Search</Button>
        </Form>
        <Container className = {styles.searchResultsGrid}>
            <Row md = {3}>
                { searchResultsComponent }
            </Row>
        </Container>
  </PageLayout>;
}


