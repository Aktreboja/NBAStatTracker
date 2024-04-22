"use client";
import { useEffect, useState } from "react";
import { retrieveTeamRoster, retrieveNbaTeam } from "@/utils/API/NBA/team";
import { NbaRosterPlayer } from "@/Types/Player";
import { NbaTeam } from "@/Types/Team";
import { Grid } from "@mui/material";
import PlayerCard from "@/Components/Player/PlayerCard";

export default function RosterContainer({ team }: { team: string }) {
  const [nbaTeam, setNbaTeam] = useState<NbaTeam>();
  const [roster, setRoster] = useState<NbaRosterPlayer[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const roster: NbaRosterPlayer[] = await retrieveTeamRoster(team);
      const teamResponse: NbaTeam = await retrieveNbaTeam(team);

      setRoster(roster);
      setNbaTeam(teamResponse);
    };
    fetchTeamData();
  }, [team]);

  return (
    <Grid rowGap={4} columnSpacing={4} container>
      {roster.length > 0 &&
        roster.map((player, key) => (
          <Grid key={key} item xs={12} sm={6} lg={4} xl={3}>
            <PlayerCard player={player} />
          </Grid>
        ))}
    </Grid>
  );
}
