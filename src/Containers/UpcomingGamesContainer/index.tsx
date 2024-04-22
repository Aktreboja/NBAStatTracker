"use client";
import GameCard from "@/Components/UI/GameCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Game } from "@/Types/Game";
import { getUpcomingGames } from "@/utils/API/BDL/Game";
import { getPlayerByFullName } from "@/utils/API/BDL/Player";
import { BdlPlayer } from "@/Types/Player";
import { Team } from "@/Types/Team";

/**
 * Upcoming Games container
 * @param { player } the name of the player to find the upcoming games for (optional)
 * @param { teamId } The team Id to find the upcoming games for.
 * @returns
 */
export default function UpcomingGamesContainer({
  player,
}: {
  player?: string;
}) {
  const [upcomingGames, setUpcomingGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchUpcomingGames = async () => {
      if (player) {
        let player_name = player.split("%20");
        const response: BdlPlayer[] = await getPlayerByFullName(
          player_name[0],
          player_name[1],
        );
        const { team } = response[0];
        const games: Game[] = await getUpcomingGames(team.id);
        setUpcomingGames(games);
      } else return;
    };
    fetchUpcomingGames();
  }, [player]);

  return (
    <Grid container>
      {upcomingGames.map((game, key) => (
        <Grid item xs={12} sm={6} md={4} key={key}>
          <GameCard
            awayTeam={game.visitor_team.abbreviation}
            homeTeam={game.home_team.abbreviation}
            date={game.date}
          />
        </Grid>
      ))}
    </Grid>
  );
}
