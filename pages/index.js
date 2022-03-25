import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Axios from 'axios'
import styles from '../styles/Players.module.css'
import Layout from '../styles/Layout.module.css'

import IntroductionSection from '../Components/IntroductionSection';

// Bootstrap Styles
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

export default function Index() {
    let [ searchParam, setSearchParam ] = useState('')
    let [ searchResults, setSearchResults ] = useState([])
    let [ playerNames, setPlayerNames ] = useState([])

    useEffect(() => {
        async function fetchData() {
            let currentSeason = new Date().getFullYear() - 1
            let playersResponse = await Axios.get(`http://data.nba.net/data/10s/prod/v1/${currentSeason}/players.json`)
            let playersArray = []
            let playersData = playersResponse.data.league.standard
            playersData.forEach(player => {(player.temporaryDisplayName !== undefined) ?  playersArray.push(player.temporaryDisplayName) : null })
            setPlayerNames(playersArray)
            
        }
        fetchData()
    }, [])


    const updateSearchParam = event => {
        setSearchParam(event.target.value)
    }

    // 2/27: Check in
    const displaySearchParam = async (e) => {
        e.preventDefault()
        const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchParam}`)
        let currentPlayersArray = data.data.filter(player => player.position !== '')
        setSearchResults(currentPlayersArray)
    }

    let searchResultsComponent = searchResults.map(({ first_name, last_name , team}, key) => {
        let nameSearch = first_name.toLowerCase() + '_' + last_name.toLowerCase()
        return (
            <Link href = {`/${nameSearch}`} key = {key} passHref >
                <Card className = {styles.searchResult}>
                    <Card.Title>{ first_name } { last_name }</Card.Title>
                    <Card.Text>{ team.full_name }</Card.Text>
                </Card>
            </Link>
        )
    })
    
  return <div className = { Layout.introductionContainer } >
        <Head>
            <title>StatsCentral | Players</title>
        </Head>
        <h1>NBA Stat Tracker</h1>
        <IntroductionSection />
        <Form onSubmit = {(e) => displaySearchParam(e)} className = {Layout.form}>
            <Form.Group className = {Layout.formGroup}>
                <Form.Label className = {Layout.formLabel}>Search for a Player</Form.Label>
                <Form.Control type = "text" placeholder = "Russell Westbrook"  value = { searchParam } onChange = { updateSearchParam } className = {Layout.formControl}/>
            </Form.Group>
            <Button type = "submit" variant = "outline-dark" className = {Layout.SearchButton}>Search</Button>
        </Form>
        <Container className = {styles.searchResultsGrid}>
            <Row xs={1} sm = {1} md = {4} style = {{padding: '0px 5px', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                { searchResultsComponent }
            </Row>
        </Container>
  </div>;
}


