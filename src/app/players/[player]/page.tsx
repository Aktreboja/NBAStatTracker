import React from "react";
import FeaturedPlayer from "@/Components/Player/FeaturedPlayer";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "@/Components/UI/Navbar";
import UpcomingGamesContainer from "@/Containers/UpcomingGamesContainer";

const Player = async ({ params = {} }: { params?: { player?: string } }) => {
  const { player } = params;

  if (!player)
    return (
      <Container>
        <Typography>Error: Player Parameter is missing</Typography>
      </Container>
    );

  let player_name = player.split("%20");

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Box sx={{ marginBottom: "30px" }}>
        <FeaturedPlayer firstName={player_name[0]} lastName={player_name[1]} />
      </Box>
      <Typography variant="h4">Upcoming Games</Typography>
      <UpcomingGamesContainer player={player} />
      {/* <Grid container>
        {upcomingGames.map((game, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <GameCard
              awayTeam={game.visitor_team.abbreviation}
              homeTeam={game.home_team.abbreviation}
              date={game.date}
            />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default Player;
