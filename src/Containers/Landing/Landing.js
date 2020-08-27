import React, { Component } from 'react'
import Navbar from "../../Components/Navbar/Navbar"

export default class Landing extends Component {

    


    render() {

        document.title = "NBA Stat Tracker"
        return (
            <div className = "Landing">
                <h1>Welcome to NBA Stat Tracker</h1>
                <Navbar />
            </div>  
        )
    }
}
