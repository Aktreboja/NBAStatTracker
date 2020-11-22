import React, { Component } from 'react'
import axios from 'axios'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"
import PlayerSelector from "../../Components/Selectors/PlayerSelector/PlayerSelector"
import Pagination from "../../Components/Pagination/Pagination"

import "../../css/Pages/Players.css"

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
    }

    updateSearch = (e) => {
        this.setState({search: e.target.value})
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


    filterRetired = (value) => {
        return (value.data.position !== '' ? false : true)
    }

    render() {

        let filtered =  (this.state.data.length > 0 ? (this.state.data.filter(play => play.position !== '')).map((play => <PlayerSelector  key =  {play.id} data  = {play} /> )) : <h3>No Players</h3> );
        return (
         <section className = "Players">   
            <Navbar />
            <div className = "SearchDiv">
            <SearchInput searchParam = "Search Player Here..." value = {this.state.search} onChange = {this.updateSearch}/>
            <button type = "submit" className = "SearchButton" onClick = {this.searchPlayer}>Search</button>
            </div>

            <h1 className = "PlayerHeader">Search for a player here</h1>
<<<<<<< HEAD
            <div className = "PlayersGrid">
                {playersList}
=======

            
            
            <div className = "PlayersBox">
                {filtered}
>>>>>>> 344c4ca096ccfe543f2e57b467ec15658049005b
            </div>
           
        </section>
        
        )
        
    }
}
