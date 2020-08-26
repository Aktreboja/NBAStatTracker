import React, { Component } from 'react'
import axios from 'axios'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"

import "../../css/components/Pages/Stats.css"

export default class Stats extends Component {

    componentDidMount() {
        document.title = "Ball Up | Stats"
    }

    render() {
        return (
            <div className = "Stats">
                <Navbar />
                <div className = "PlayerStat">
                    <h1></h1>
                </div>
            </div>
        )
    }
}
