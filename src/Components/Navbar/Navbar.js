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

        const toggleHamburger = (e) => {
            alert('test')
        }


    return (
        <div className = "Navbar">
            <Link to ="/"><h1 className = "NavbarTitle">Ball Up</h1></Link>
            <div className = "NavbarLinks">
                <Link to = "/api/players" ><div className = "NavbarLink">Players</div></Link>
                <div className = "NavbarLink">Teams</div>
                <div className = "NavbarLink">Stats</div>

                {/*                 <div className = "NavbarLink"><Link to = "/api/players">Players</Link></div>
                <Link to = "/api/teams">Teams</Link>
                <Link to = "/api/stats">Stats</Link>   */}
            </div>

            <div className = "HamburgerMenu" onClick = {toggleHamburger}>
                    <div className = "bar bar1"></div>
                    <div className = "bar bar2"></div>
                    <div className = "bar bar3"></div>
            </div>


        </div>
    )
}


