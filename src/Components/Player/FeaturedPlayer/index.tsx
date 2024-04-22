"use client";
import { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import LineChart from "@/Components/Charts/LineChart";
import ChartButton from "@/Components/Charts/ChartButton";
import { retrievePlayerInformation, calculateDaysBefore } from "@/utils";
import { retrievePreviousGameStats } from "@/utils/API/BDL/stats";
import { PlayerInfo } from "@/utils";
import { PlayerStats } from "@/Types/stats";

interface FeaturedPlayerProps {
  firstName: string;
  lastName: string;
}

interface FeaturedChartProps {
  dates: string[];
  points: number[];
  assists: number[];
  rebounds: number[];
  minutes: number[];
}

const FeaturedPlayer: React.FC<FeaturedPlayerProps> = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const initialState = {
    dates: [],
    points: [],
    assists: [],
    rebounds: [],
    minutes: [],
  };

  const [active, setActive] = useState<string>("Points");
  const [featuredPlayer, setFeaturedPlayer] =
    useState<FeaturedChartProps>(initialState);
  const [activeData, setActiveData] = useState<number[]>([]);
  const [playerData, setPlayerData] = useState<PlayerInfo>();

  useEffect(() => {
    const fetchFeaturedPlayer = async () => {
      const playerData = (await retrievePlayerInformation(
        firstName,
        lastName,
      )) as PlayerInfo;
      const { bdlData } = playerData;

      const recentGames: PlayerStats[] = await retrievePreviousGameStats(
        bdlData.id.toString(),
        calculateDaysBefore(30),
      );

      const graphData = {
        points: recentGames.map((game) => game.pts),
        assists: recentGames.map((game) => game.ast),
        rebounds: recentGames.map((game) => game.oreb + game.dreb),
        minutes: recentGames.map((game) => Number(game.min)),
        dates: recentGames.map((game) => game.game.date),
      };

      setActiveData(graphData.points);
      setPlayerData(playerData);
      setFeaturedPlayer(graphData);
    };

    fetchFeaturedPlayer();
  }, [firstName, lastName]);

  const setGraphView = (view: string, graphData: number[]) => {
    setActive(view);
    setActiveData(graphData);
  };

  const { points, assists, rebounds, minutes, dates } = featuredPlayer;

  return (
    <Box
      component="section"
      sx={{
        height: "fit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ width: "100%", marginY: "20px" }}
        align="center"
      >
        Featured Player
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          maxWidth: "1200px",
        }}
      >
        {playerData && playerData.bdlData && playerData.nbaData && (
          <Card
            sx={{
              width: "80%",
              minWidth: { md: "400px" },
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              marginX: "60px",
            }}
          >
            <CardMedia
              component="img"
              image={`https://cdn.celtics.com/logos/teams/latest/svg/${playerData.bdlData.team.abbreviation}.svg`}
              sx={{
                width: "65%",
                height: "auto",
                position: "absolute",
                top: "-20px",
              }}
            />
            <CardMedia
              component="img"
              image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerData.nbaData.id}.png`}
              sx={{
                width: "80%",
                height: "auto",
                paddingLeft: "5px",
                paddingRight: "5px",
                zIndex: "50",
              }}
            />
            <CardContent>
              <Typography variant="h5" fontWeight={600}>
                {playerData.bdlData.first_name} {playerData.bdlData.last_name}
              </Typography>
              <Typography variant="body1">
                {playerData.bdlData.team.full_name}
              </Typography>
              <Typography variant="body2">
                {playerData.bdlData.position}
              </Typography>
            </CardContent>
          </Card>
        )}
        {featuredPlayer && (
          <Box component="div" sx={{ width: "80%" }}>
            <LineChart data={activeData} labels={dates} title={active} />
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <ChartButton
                active={active}
                handler={() => setGraphView("Points", points)}
              >
                Points
              </ChartButton>
              <ChartButton
                active={active}
                handler={() => setGraphView("Assists", assists)}
              >
                Assists
              </ChartButton>
              <ChartButton
                active={active}
                handler={() => setGraphView("Rebounds", rebounds)}
              >
                Rebounds
              </ChartButton>
              <ChartButton
                active={active}
                handler={() => setGraphView("Minutes", minutes)}
              >
                Minutes
              </ChartButton>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FeaturedPlayer;
