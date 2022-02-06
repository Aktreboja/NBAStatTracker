import React from 'react'
import { Link } from 'react-router-dom'
import "../../css/components/Navbar.css"

//import Sidebar from "../../Components/Sidebar/Sidebar"

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
                <Link to = "/api/players" ><div className = "NavbarLink HoverLink">Players</div></Link>
                <Link to = "/api/teams"><div className = "NavbarLink HoverLink">Teams</div></Link>
                {/*                 <div className = "NavbarLink"><Link to = "/api/players">Players</Link></div>
                <Link to = "/api/teams">Teams</Link>
                <Link to = "/api/stats">Stats</Link>   */}
            </div>


        </div>

    )
}


