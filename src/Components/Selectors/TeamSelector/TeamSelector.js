import React from 'react'

import "../../../css/components/TeamSelector.css"

export default function TeamSelector(props) {
    return (
        <div className = "TeamSelector">
            <a href="https://seeklogo.net/?p=9908" target="_blank"><img src="https://seeklogo.net/wp-content/uploads/2015/11/cleveland-cavaliers-logo-vector-download-400x400.jpg"  alt="Cleveland Cavaliers logo vector" /></a>
            <p><b>Name: </b> {props.team_name}</p>
            <p><b>City:</b> {props.city}</p>
            <p><b>Conference:</b> {props.conference}</p>
        </div>
    )
}
