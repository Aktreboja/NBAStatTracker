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
            <div>
                <h1 className= "header" role="title"><b>NBA stat tracker</b></h1>
                <h3 className= "landingText">An application focused on retrieving stats on current NBA players.</h3>
            </div>
            <div className='aboutContainer'>
                <p className = "aboutText">View season averages of any current NBA player</p>
                <p className = "aboutText">View the current roster of a given team</p>
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


