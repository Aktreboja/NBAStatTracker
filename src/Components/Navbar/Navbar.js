import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/components/Navbar.css"

export default function Navbar() {
    return (
        <div className = "Navbar">
            <h1 className = "NavbarTitle">Ball Up</h1>
            <div className = "NavbarLinks">
                <Link to = "/api/players">Players</Link>
                <Link to = "/api/teams">Teams</Link>
                <Link to = "/api/stats">Stats</Link>
            </div>
        </div>
    )
}


