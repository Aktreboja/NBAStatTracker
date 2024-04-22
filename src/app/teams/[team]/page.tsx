import { Suspense } from "react";
import { Container, Typography } from "@mui/material";
import Navbar from "@/Components/UI/Navbar";
import TeamShowcase from "@/Components/Team/TeamShowcase";
import RosterContainer from "@/Containers/RosterContainer";
import UpcomingGamesContainer from "@/Containers/UpcomingGamesContainer";
/**
 * Team Page, with a parameter to display a specific team
 * @param params An objec that looks for a query parameter for the page
 * @returns
 */
const Team = async ({ params = {} }: { params?: { team?: string } }) => {
  const { team } = params;
  if (!team) {
    return (
      <Container>
        {/* todo: better error handling */}
        <Typography>Error: Team Paramter is missing</Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Navbar />
      <Suspense fallback={<p>Loading Team Showcase</p>}>
        <TeamShowcase team={team} />
      </Suspense>

      <Suspense fallback={<p>Loading Roster</p>}>
        <Typography
          fontWeight={"600"}
          marginY={3}
          sx={{ typography: { sm: "body1", md: "h4" } }}
        >
          Current Roster
        </Typography>
        <RosterContainer team={team} />
      </Suspense>
    </Container>
  );
};

export default Team;
