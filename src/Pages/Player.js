import React from 'react'

import Navbar from "../Components/Navbar/Navbar"
import PlayersContainer from "../Containers/PlayersContainer/PlayersContainer"
import "../css/Pages/Player.css"
import "../css/containers/PlayersContainer.css"

/**
 * @name Player Component
 * @description PlayerComponent that displays  basic information about Players.
 * @param {*} props 
 */
const Player = (props) => {
    return (
        <div className = "container">
            <Navbar />
            <PlayersContainer />

    </div>
    )
}

export default Player;