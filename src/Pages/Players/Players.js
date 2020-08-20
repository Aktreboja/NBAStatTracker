import React, { Component } from 'react'
import axios from 'axios'

import SearchInput from "../../Components/SearchInput/SearchInput"

export default class Players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        document.title = "Stat Tracker | Players"

        axios({
            url: "https://www.balldontlie.io/api/v1/players?per_page=1"
        })
        .then(res => {
            console.log(res)
            let combined = this.state.data.concat(res.data)
            this.setState({data: combined})
        })
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
