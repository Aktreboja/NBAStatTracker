import React, { useState } from 'react';
import Head from 'next/head'

import Axios from 'axios'

// swr: Client side fetching for next.js
import useSWR from 'swr';

// Bootstrap Styles
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
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
export default function players() {    
   let [searchParam, setSearchParam] = useState()

  return <div>
        <Head>
            <title>Ball-Up | Players</title>
        </Head>
        <h1>Ball-Up | Players</h1>
        <Form >
            <Form.Group>
                <Form.Label>Search for a Player</Form.Label>
                <Form.Control type = "text" placeholder = "Ex: Kobe Bryant"  value = { searchParam }/>
            </Form.Group>
            <Button variant = "outline-dark">Search</Button>
        </Form>
        <Container>
            
        </Container>
  </div>;
}


/**
 * This is the server side approach, will switch to client side fetching to be able to update on input 
 * @returns 
 */
// This gets called on every request
export async function getServerSideProps() {
    // const res = await fetch('https://www.balldontlie.io/api/v1/players')
    //const players = JSON.stringify(res)

    let response = await Axios.get('https://www.balldontlie.io/api/v1/players')
    let players = JSON.stringify(response.data)
    return { props: {players}}
}
