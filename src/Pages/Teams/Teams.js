import React, {useState, useEffect} from 'react'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"
import TeamSelector from "../../Components/Selectors/TeamSelector/TeamSelector"
import axios from "axios"
import "../../css/Pages/Teams.css"


class Teams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        document.title = "Stat Tracker | Teams"
        axios({
            url: "https://www.balldontlie.io/api/v1/teams"
        })
        .then(res => {
            console.log(res.data);
            this.setState({data: res.data.data})
        })
    }

    render() {
        let teamsList = this.state.data.map( (team) =>  <TeamSelector key = {team.id} team_name = {team.full_name} conference = {team.conference} city = {team.city}/> )
        return (
            <div>
                <Navbar />
<<<<<<< HEAD
                <h1 style = {{textAlign: 'center'}}>Current NBA Teams</h1>
                <div className = "TeamGrid">
=======

                <div className = "TeamBox">
>>>>>>> 344c4ca096ccfe543f2e57b467ec15658049005b
                    {teamsList}
                </div>
               
            </div>
        )
    }
}

export default Teams