import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Axios from 'axios'
import IntroductionSection from '../Components/Landing/IntroductionSection';
import PlayerSearchCard from '../Components/Player/PlayerSearchCard';
import PlayerSearchForm from '../Components/Player/PlayerSearchForm';

// Bootstrap Styles
import { Button } from 'react-bootstrap';

export default function Index() {
    let [ searchParam, setSearchParam ] = useState('')
    let [ searchResults, setSearchResults ] = useState([])
    let [ playerNames, setPlayerNames ] = useState([])

    // useEffect(() => {
    //     async function fetchData() {
    //         let currentSeason = new Date().getFullYear() - 1
    //         let playersResponse = await Axios.get(`http://data.nba.net/data/10s/prod/v1/${currentSeason}/players.json`)
    //         let playersArray = []
    //         let playersData = playersResponse.data.league.standard
    //         playersData.forEach(player => {(player.temporaryDisplayName !== undefined) ?  playersArray.push(player.temporaryDisplayName) : null })
    //         setPlayerNames(playersArray)
    //     }
    //     fetchData()
    // }, [])


    // const updateSearchParam = event => {
    //     setSearchParam(event.target.value)
    // }

  
    // const displaySearchParam = async (e) => {
    //     e.preventDefault()
    //     const { data } = await Axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchParam}`)
    //     let currentPlayersArray = data.data.filter(player => player.position !== '')
    //     setSearchResults(currentPlayersArray)
    // }

    // let searchResultsComponent = searchResults.map(({ first_name, last_name , team}, key) => {
    //     let nameSearch = first_name.toLowerCase() + '_' + last_name.toLowerCase()
    //     return (
    //         <PlayerSearchCard first_name={first_name} last_name = {last_name} team = {team} key = {key} />
    //     )
    // })
    
  return <>
        <Head>
            <title>StatsCentral | Welcome</title>
        </Head>
        <div className='landingContainer'>
            <div className='landingTopGrid '>
                <h1 className= "header" role="title">StatsCentral</h1>
                <h3 className= "landingText">An application focused on retrieving stats on current NBA players.</h3>
            </div>
            {/* <IntroductionSection /> */}
            <div className='landingGridItem '>
                <div className='aboutContainer'>
                    <p className = "aboutText">View season averages of a NBA player</p>
                    <p className = "aboutText">View the current roster of a given team</p>
                    <p className = "aboutText">Compare teams and players against each other to see who has the better overall stats.</p>
                </div>
                <PlayerSearchForm /> 
                <div>
                    <p>hello</p>
                </div>
            </div>
        </div>
  </>;
}


