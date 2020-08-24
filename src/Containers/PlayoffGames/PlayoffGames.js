import React, { Component } from 'react'
import axios from "axios"

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
            day: date.getDay(),
            month: date.getMonth(),
            year: date.getFullYear()
        }
        document.title = "Ball Up | Welcome"
        axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${currentDay.year}-${currentDay.month}-${currentDay.day}&status={start_time}&per_page=20`)
        .then(res => this.setState({data: res.data.data}))
        .catch()
    }

    render() {
        return (
            <div className = "PlayoffGames">
                <h1 className = "NBASchedule">Current NBA Schedule</h1>
                <div className = "PlayoffGame">Game 1</div>
                <div className = "PlayoffGame">Game 2</div>
                <div className = "PlayoffGame">Game 3</div>
            </div>
        )
    }
}
