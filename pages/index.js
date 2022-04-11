import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Axios from 'axios'

import NavBar from '../Components/Layout/Navbar';
import IntroductionSection from '../Components/IntroductionSection';
import PlayerSearchCard from '../Components/Player/PlayerSearchCard';
import PlayerSearchForm from '../Components/Player/PlayerSearchForm';

// Bootstrap Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

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
            <PlayerSearchCard first_name={first_name} last_name = {last_name} team = {team} key = {key} />
        )
    })
    
  return <>
        <Head>
            <title>StatsCentral | Welcome</title>
        </Head>
        <div className='landingContainer'>
            <div className='landingLeftGrid'>
                <h1 className= "header">StatsCentral</h1>
                <h3 className= "landingText">A web application focused on getting the most up to date stats on NBA players.</h3>
            </div>

            <div className= "landingGridItem">
                <IntroductionSection />
                <PlayerSearchForm searchHandler={displaySearchParam} searchParam = {searchParam} paramHandler = {updateSearchParam}/>
            </div>
        </div>

            



{/* 
        <Container className = {styles.searchResultsGrid}>
            <Row xs={1} sm = {1} md = {4} style = {{padding: '0px 5px', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                { searchResultsComponent }
            </Row>
        </Container> */}
  </>;
}


