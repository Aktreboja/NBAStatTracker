import React, { Component } from 'react'
import axios from 'axios'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"


import "../../css/Pages/Stats.css"

export default class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(props) {
        document.title = "Ball Up | Stats"

        /*
        `https://www.balldontlie.io/api/v1/season_averages?season=${props.season}&player_ids[]=${props.player_id}`
        */
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=237`)
            .then(res => {
                this.setState({data: res.data.data[0]})
                console.log("Data" ,this.state.data)
            })
            .catch(e => console.error('ERROR: ', e))
    }

    render() {
        return (
            <div className = "Stats">
                <Navbar />
                
                <div className = "PlayerStat">
                   
                    <h1>Draymond Green</h1>
                    <table className = "StatsShowcase">
                        <tbody>
                            <tr>
                                <td><strong>Season: </strong> {this.state.data.season}</td>
                                <td><strong>Offensive Rebounds</strong>{this.state.data.oreb}</td>
                            </tr>
                            <tr>
                                <td><strong>Avg FG Attempted: </strong>{this.state.data.fga}</td>
                                <td><strong>Defensive Rebounds</strong>{this.state.data.dreb}</td>
                            </tr>
                            <tr>
                                <td><strong>Avg FG Made: </strong> {this.state.data.fgm}</td>
                                <td><strong>Assists</strong>{this.state.data.ast}</td>
                            </tr>
                            <tr>
                                <td><strong>FG Percentage: </strong> {this.state.data.fg_pct}</td>
                                <td><strong>Steals</strong>{this.state.data.stl}</td>
                            </tr>
                            <tr>
                                <td><strong>Avg 3pt FG Attempted: </strong>{this.state.data.fg3a}</td>
                                <td><strong>Blocks</strong>{this.state.data.blk}</td>
                            </tr>
                            <tr>
                                <td><strong>Avg 3pt FG made</strong>{this.state.data.fg3m}</td>
                                <td><strong>Turnovers</strong>{this.state.data.turnover}</td>
                            </tr>
                            <tr>
                                <td><strong>3pt FG Percentage: </strong>{this.state.data.fg3_pct}</td>
                                <td><strong>Personal Fouls</strong>{this.state.data.pf}</td>
                            </tr>
                            <tr>
                                <td><strong>Free Throws Attempted: </strong>{this.state.data.pts}</td>
                                <td><strong>Points</strong>{this.state.data.pts}</td>
                            </tr>
                            <tr>
                                <td><strong>Free Throws Made</strong>{this.state.data.ftm}</td>
                            </tr>
                            <tr>
                                <td><strong>Free Throw Percentage</strong>{this.state.data.ft_pct}</td>
                            </tr>
                            


                        </tbody>

                       
                    </table>


                   
                </div>
               
            </div>
        )
    }
}


/*
                            <p></p><strong>Season: {this.state.data.season}</strong>
                            <p></p><strong>Field Goals Attempted:</strong>
                            <p></p><strong>Field Goals Made: </strong>
                            <p></p><strong>3Pt Field Goals Attempted: </strong>
                            <p></p><strong>3pt Field Goals Made: </strong>
                            <p></p><strong>Offensive Rebounds: </strong>
                            <p></p><strong>Defensive Rebounds: </strong>
                            <p></p><strong>Assists: </strong>

                                                    <p><strong>Steals: </strong></p>
                        <p><strong>Blocks: </strong></p>
                        <p><strong>Turnovers: </strong></p>
                        <p><strong>Average Points: </strong></p>
                        <p><strong>Field Goal Percentage: </strong></p>
                        <p><strong>3Pt Field Goal Percentage: </strong></p>
                        <p><strong>Free throw Percentage: </strong></p>
                        <p><strong> Avg field Goals: </strong></p>
*/