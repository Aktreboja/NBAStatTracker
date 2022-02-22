import React from 'react'



export default function PlayerAverageRow({ stats }) {
  const { pts, ast, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, stl, blk, turnover, pf, fg_pct, fg3_pct, ft_pct, min, games_played, season} = stats
  let statsArray = []
  for (const prop in stats) statsArray.push(prop)
  let avgHeaders = ['Games Played', 'Player ID', 'Season', 'Mins', 'FGM', 'FGA', '3pt-FGM', 'FTM', 'FTA', 'OREB', 'DREB ', 'REB', 'AST', 'STL', 'BLK', 'DREB', 'STL', 'BLK', 'TO']

  console.log(statsArray)

  let StatComponent = statsArray.map((stat, index) => {
    let statHeader = avgHeaders[index]
    return (<div>
      <h1>{ statHeader }</h1>
      <p>{ stat } </p>
    </div>)
    
  })

  return (
      <section>
        <StatComponent />
      </section>
    )
}
