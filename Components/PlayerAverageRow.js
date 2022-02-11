import React from 'react'



export default function PlayerAverageRow({ stats }) {
  console.log(stats)

  const { pts, ast, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, stl, blk, turnover, pf, fg_pct, fg3_pct, ft_pct, min, games_played, season} = stats

  let row = stats.map((year) => {
    return (
      <tr>
        <td>{ year.season }</td>
        <td>{ year.min }</td>
        <td>{ year.pts }</td>
        <td>{ year.fgm }</td>
        <td>{ year.fga }</td>
        <td>{ year.fg_pct }</td>
        <td>{ year.fg3m }</td>
        <td>{ year.fg3a }</td>
        <td>{ year.fg3_pct } </td>
        <td>{ year.ftm }</td>
        <td>{ year.fta }</td>
        <td>{ year.ft_pct }</td>
        <td>{ year.ast }</td>
        <td>{ year.reb }</td>
        <td>{ year.oreb }</td>
        <td>{ year.dreb }</td>
        <td>{ year.stl }</td>
        <td>{ year.blk }</td>
        <td>{ year.turnover }</td>
      </tr>
    )
  })

  return (
    <>
    {row}
    </>
    )
}
