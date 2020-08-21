import React, {useState, useEffect} from 'react'

import Navbar from "../../Components/Navbar/Navbar"
import SearchInput from "../../Components/SearchInput/SearchInput"
import axios from "axios"


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
            this.setState({data: res.data})
        })
    }

    render() {

        let teamsList = this.state.data.map( (team) => <h1>{team.city}</h1> )

        return (
            <div>
                <Navbar />
                {teamsList}
            </div>
        )
    }
}

export default Teams