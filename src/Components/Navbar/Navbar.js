import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/components/Navbar.css"

export default function Navbar() {

       // window.onscroll = () => myfunction();

        /*
        let nav = document.getElementsByClassName("Navbar");
        var sticky = nav.offsetTop
        
        const myfunction = () => {
            if (window.pageYOffset => sticky) {
                nav
            }
        }
        */


    return (
        <div className = "Navbar">
            <Link to ="/"><h1 className = "NavbarTitle">Ball Up</h1></Link>
            <div className = "NavbarLinks">
                <Link to = "/api/players">Players</Link>
                <Link to = "/api/teams">Teams</Link>
                <Link to = "/api/stats">Stats</Link>
            </div>
        </div>
    )
}


