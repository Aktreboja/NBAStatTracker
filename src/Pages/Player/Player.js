import React from 'react'

import Navbar from "../../Components/Navbar/Navbar"
import "../../css/Pages/Player.css"

/**
 * @name Player Component
 * @description PlayerComponent that displays  basic information about Players.
 * @param {*} props 
 */
const Player = (props) => {
    return (
        <div className = "container">
            <Navbar />
           <div className = "player-header">
               <div className = "player-description">
                    <h1>Kobe Bryant</h1>
                    <p><h4>Height:</h4> 6 ' 10 "</p>
                    <p><h4>Weight:</h4> 180 lbs</p>
                    <p><h4>Position:</h4> Guard</p>
                    <p><h4>Team:</h4> Los Angeles Lakers</p>
               </div>
                
                <div className = "player-img-wrap">
                    Test
                </div>
           </div>

           <div className = "player-body">
                <h1>Season Stats</h1>
           </div>
    </div>
    )
}

export default Player;