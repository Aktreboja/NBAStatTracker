import React, { Component } from 'react'
import axios from 'axios'

export default class Players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    componentDidMount() {

    }

    render() {
        return (
         <div>   
            <h1>Players Page</h1>
        </div>
        )
    }
}
