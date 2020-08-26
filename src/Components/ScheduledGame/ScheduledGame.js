import React from 'react'

const ScheduledGame = (props) => {
    const MONTHS = [
        'January', 
        'August', 
        'March',
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September',
        'October', 
        'November', 
        'December'
        ]

        // YYYY-MM-DD
        let todaysDate = props.date.split('-')
    
        let month = MONTHS[parseInt(todaysDate[1] - 1)]
        let day = todaysDate[2].split('T')[0]

    if (props.period === 0) return (
        <div className = "ScheduledGame">
            <p><strong>Date: </strong> { month } { day }, {todaysDate[0]}</p>
            <p><strong>{props.home_team}</strong> vs <strong>{props.away_team}</strong></p>

            {/* Will not show the bottom two if the Game has not started. */}
            <strong>Game Has Not Started</strong>
        </div>
    )
    else return (
    <div className = "ScheduledGame">
        <p><strong>Date: </strong> { month } { day }, {todaysDate[0]}</p>
        <p><strong>{props.home_team}</strong> vs <strong>{props.away_team}</strong></p>

        {/* Will not show the bottom two if the Game has not started. */}
        

        <p><strong>Period: </strong> {props.period}</p>
        <p><strong>Time: </strong> {props.time}</p>
    </div>
    )

}


export default ScheduledGame