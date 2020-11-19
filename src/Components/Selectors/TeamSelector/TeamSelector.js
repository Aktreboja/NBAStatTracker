import React from 'react'

import "../../../css/components/TeamSelector.css"

export default function TeamSelector(props) {
    return (
        <div className = "TeamSelector">
            <p><b>Name: </b> {props.team_name}</p>
            <p><b>City:</b> {props.city}</p>
            <p><b>Conference:</b> {props.conference}</p>
        </div>
    )
}
