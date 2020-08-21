import React from 'react'
import "../../../css/components/PlayerSelector.css"

export default function PlayerSelector(props) {
    return (
        <div className = "PlayerSelector">
            <h1>Name: {props.data.first_name} {props.data.last_name}</h1>
            <p>Position: {props.data.position}</p>
            <p>Team: {props.data.team.full_name}</p>
        </div>
    )
}
