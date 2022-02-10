import React from 'react'



export default function PlayerAverageRow({ stats }) {
  console.log(stats)

  const { pts, ast, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, stl, blk, turnover, pf, fg_pct, fg3_pct, ft_pct, min, games_played, season} = stats

  return (
    <tr>
      <td>{ season }</td>
      <td>{ min }</td>
      <td>{ pts }</td>
      <td>{ fgm }</td>
      <td>{ fga }</td>
      <td>{ fg_pct }</td>
      <td>{ fg3m }</td>
      <td>{ fg3a }</td>
      <td>{ fg3_pct } </td>
      <td>{ ftm }</td>
      <td>{ fta }</td>
      <td>{ ft_pct }</td>
      <td>{ ast }</td>
      <td>{ reb }</td>
      <td>{ oreb }</td>
      <td>{ dreb }</td>
      <td>{ stl }</td>
      <td>{ blk }</td>
      <td>{ turnover }</td>
    </tr>
  )
}
