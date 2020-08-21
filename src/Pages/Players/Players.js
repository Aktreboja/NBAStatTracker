import React, { Component } from 'react'
import axios from 'axios'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"
import PlayerSelector from "../../Components/Selectors/PlayerSelector/PlayerSelector"

import "../../css/components/Pages/Players.css"

export default class Players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            search: '',
            searchUrl: ''
        }
    }

    componentDidMount() {
        document.title = "Stat Tracker | Players"

        axios({
            url: "https://www.balldontlie.io/api/v1/players?per_page=20&search=Lebron"
        })
        .then(res => {
            console.log(res)
            let combined = this.state.data.concat(res.data.data)
            this.setState({data: combined})
        })
    }

    updateSearch = (e) => this.setState({search: e.target.value})

    render() {
        let playersList = this.state.data.map((play) => <PlayerSelector key = {play.id} data = {play} />)


        return (
         <section className = "Players">   
            <Navbar />
            <SearchInput searchParam = "Search Player Here..." value = {this.state.search} onChange = {this.updateSearch}/>
            <div className = "PlayersBox">
                {playersList}
            </div>
           
        </section>
        )
    }
}
