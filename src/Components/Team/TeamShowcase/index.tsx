"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NbaTeam } from "@/Types/Team";
import { retrieveNbaTeam } from "@/utils/API/NBA/team";

export default function TeamShowcase({ team }: { team: string }) {
  const [nbaTeam, setNbaTeam] = useState<NbaTeam>();

  useEffect(() => {
    const fetchTeam = async () => {
      const teamResponse: NbaTeam = await retrieveNbaTeam(team);
      setNbaTeam(teamResponse);
    };
    fetchTeam();
  }, [team]);

  if (!nbaTeam) return null;
  const { full_name, city, abbreviation } = nbaTeam;
  return (
    <Box component={"section"} sx={{ display: "flex" }}>
      <Image
        src={`https://cdn.celtics.com/logos/teams/latest/svg/${abbreviation}.svg`}
        width={150}
        height={150}
        alt={`${full_name}`}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            typography: { sm: "h5", md: "h3" },
            fontWeight: { sm: 500, md: 700 },
          }}
        >
          {full_name}
        </Typography>
        <Typography>{city}</Typography>
      </Box>
    </Box>
  );
}
