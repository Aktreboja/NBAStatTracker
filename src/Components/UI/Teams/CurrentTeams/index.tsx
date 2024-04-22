"use client";
import { Team } from "@/Types/Team";
import { Box, Typography, Grid } from "@mui/material";
import TeamCard from "@/Components/Team/TeamCard";
import { useEffect, useState } from "react";
import { retrieveAllNbaTeams } from "@/utils/API/BDL/Team";

const CurrentTeams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const teamData = await retrieveAllNbaTeams();
      setTeams(teamData);
    };
    fetchTeams();
  }, []);

  if (!teams || teams.length == 0) return null;
  return (
    <Box component={"div"}>
      <Typography
        align="center"
        marginY="10px"
        sx={{ typography: { xs: "h4", md: "h3" } }}
      >
        Select an NBA Team
      </Typography>
      <Grid
        container
        spacing={2}
        width={"80%"}
        maxWidth={"lg"}
        justifyItems={"center"}
        marginX={"auto"}
      >
        {teams &&
          teams.map((team, key) => (
            <Grid key={key} item xs={6} sm={4} lg={3} xl={2}>
              <TeamCard team={team} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CurrentTeams;
