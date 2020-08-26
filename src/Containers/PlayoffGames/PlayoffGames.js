import React, { Component } from 'react'
import axios from "axios"

import ScheduledGame from "../../Components/ScheduledGame/ScheduledGame"

export default class PlayoffGames extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }


    componentDidMount() {

        let date = new Date();
        const currentDay = {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
        document.title = "Ball Up | Welcome"
        axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${currentDay.year}-${currentDay.month}-${currentDay.day}&end_date=${currentDay.year}-${currentDay.month}-${currentDay.day}&status={start_time}&per_page=20`)
        .then(res => {

            this.setState({data: res.data.data})
            console.log(this.state.data)
            }
        )
        .catch(e => console.log(e))
    }

    render() {

        let scheduledGameList = this.state.data.map((game) => <ScheduledGame 
            key = {game.id}    
            date = {game.date} 
            home_team = {game.home_team.full_name}  
            away_team = {game.visitor_team.full_name}
            period = {game.period}
            time = {game.time}
            />)

        return (
            <div className = "PlayoffGames">
                <h1 className = "NBASchedule">Current NBA Schedule</h1>
                {scheduledGameList}

            </div>
        )
    }
}
