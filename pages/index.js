import React, { useState } from 'react';
import Head from 'next/head'
import PlayerSearchForm from '../Components/Player/PlayerSearchForm';
import SearchResults from '../Containers/SearchResults'
import { retrieveCurrentNbaPlayers } from './api';

export default function Index({ playerNames }) {

    let [searchParam, setSearchParam ] = useState('')


    const updateParam = (event) => {
        setSearchParam(event.target.value)
    }

  return <>
        <Head>
            <title>StatsCentral | Welcome</title>
        </Head>
        <div className='landingContainer'>
            <div className=''>
                <h1 className= "header" role="title">StatsCentral</h1>
                <h3 className= "landingText">An application focused on retrieving stats on current NBA players.</h3>
            </div>
            <div className='aboutContainer'>
                <p className = "aboutText">View season averages of a NBA player</p>
                <p className = "aboutText">View the current roster of a given team</p>
                <p className = "aboutText">Compare teams and players against each other to see who has the better overall stats.</p>
            </div>
            <PlayerSearchForm searchParam= {searchParam} paramHandler = {updateParam} /> 
            <SearchResults playerData = { playerNames } param = {searchParam}/>
        </div>
  </>;
}


export async function getServerSideProps() {
    let playerNames = await retrieveCurrentNbaPlayers();
    return {props: {playerNames}}
}


