import React from 'react'



export default function PlayerAverageRow({ stats }) {
  console.log(stats)

  const { pts, ast, fgm, fga, fg3m, fg3a, ftm, fta, oreb, dreb, reb, stl, blk, turnover, pf, fg_pct, fg3_pct, ft_pct, min, games_played, season} = stats

  /*

  // This will be for when we get the 5 most recent years

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
  */

  return (
    <tr>
      <td>{ stats.season }</td>
      <td>{ stats.min }</td>
      <td>{ stats.pts }</td>
      <td>{ stats.fgm }</td>
      <td>{ stats.fga }</td>
      <td>{ stats.fg_pct }</td>
      <td>{ stats.fg3m }</td>
      <td>{ stats.fg3a }</td>
      <td>{ stats.fg3_pct } </td>
      <td>{ stats.ftm }</td>
      <td>{ stats.fta }</td>
      <td>{ stats.ft_pct }</td>
      <td>{ stats.ast }</td>
      <td>{ stats.reb }</td>
      <td>{ stats.oreb }</td>
      <td>{ stats.dreb }</td>
      <td>{ stats.stl }</td>
      <td>{ stats.blk }</td>
      <td>{ stats.turnover }</td>
  </tr>
    )
}
