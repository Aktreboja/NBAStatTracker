import React, { Component } from 'react'
import axios from 'axios'

import SearchInput from "../../Components/SearchInput/SearchInput"

export default class Players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        document.title = "Stat Tracker | Players"
    }

    render() {
        return (
         <div>   
            <h1 className = "PlayersTitle">Search a player here</h1>
            <SearchInput searchParam = "Search Player Here..."/>
        </div>
        )
    }
}
