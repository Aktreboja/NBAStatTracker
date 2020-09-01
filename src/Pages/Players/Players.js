import React, { Component } from 'react'
import axios from 'axios'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"
import PlayerSelector from "../../Components/Selectors/PlayerSelector/PlayerSelector"
import Pagination from "../../Components/Pagination/Pagination"

import "../../css/components/Pages/Players.css"

export default class Players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            search: '',
            searchUrl: 'https://www.balldontlie.io/api/v1/players?per_page=20&search=',
            pages: '',

            meta: []
        }
    }


    componentDidMount() {
        document.title = "Ball Up | Players"

        axios({
            url: "https://www.balldontlie.io/api/v1/players?per_page=20&search=Lebron_james"
        })
        .then(res => {
            console.log(res)
            let combined = this.state.data.concat(res.data.data)
            this.setState({data: combined})
            this.setState({meta: res.data.meta})
        })
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value})
        console.log(this.state.search)

    }

    searchPlayer = (e) => {
        e.preventDefault();
        axios({
            url: this.state.searchUrl + this.state.search.split(' ').join('_')
        })
        .then(res => {
            this.setState({data: res.data.data})            
        })
    }


    viewStatsPage = (e) => {
        e.preventDefault()
       
    }

    render() {
        let playersList = this.state.data.map((play) => <PlayerSelector  key = {play.id} data = {play} />)
        return (
         <section className = "Players">   
            <Navbar />
            <div className = "SearchDiv">
            <SearchInput searchParam = "Search Player Here..." value = {this.state.search} onChange = {this.updateSearch}/>
            <button type = "submit" className = "SearchButton" onClick = {this.searchPlayer}>Search</button>
            </div>

            <h1 className = "PlayerHeader">Search for a player here</h1>

            

            <div className = "PlayersBox">
                {playersList}
            </div>
           
        </section>
        )
    }
}
