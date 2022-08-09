import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from '../styles/Layout.module.css'
import components from '../styles/Components.module.css'

export default function PlayerAverageRow({ stats }) {
  const { pts, ast, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, stl, blk, turnover, pf, fg_pct, fg3_pct, ft_pct, min, games_played, season} = stats
  let statsArray = Object.values(stats)
  //for (const prop in stats) statsArray.push(prop)
  let avgHeaders = ['Games Played', 'Player ID', 'Season', 'Mins', 'FGM', 'FGA', '3pt-FGM', '3pt-FTA', 'FTM', 'FTA', 'OREB', 'DREB ', 'REB', 'AST', 'STL', 'BLK', 'TO', 'PF', 'PTS', 'FG %', 'FG3 %', 'FT %']
  let StatComponent = statsArray.map((stat, index) => {
    let statHeader = avgHeaders[index]
    if (statHeader == 'Player ID') return
    return (<div key = { index } className = {components.Stat} >
      <h5>{ statHeader }</h5>
      <p>{ stat } </p>
    </div>)
    
  })

  return (
      <Row xs = {2} sm = {2} md = {2} lg = {2} className = {components.StatRow}>
         { StatComponent }
      </Row>
    )
}
