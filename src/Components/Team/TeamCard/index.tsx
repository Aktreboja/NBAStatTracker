"use client";
import React from "react";
import { Team } from "@/Types/Team";
import Image from "next/image";
import Link from "next/link";
import { Box, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

// Styled Card component
const TeamComponent = styled(Card)({
  marginX: "3px",
  cursor: "pointer",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "rgba(200,200,200, 0.25)",
    transition: "background-color 0.15s",
  },
});
/**
 * Team Card for the player page
 */
export default function TeamCard({ team }: { team: Team }) {
  const { full_name, abbreviation, conference, division, id } = team;
  if (conference.trim().length === 0) return null;
  return (
    <Link
      href={`/teams/${abbreviation}`}
      style={{ textDecoration: "none" }}
      title={full_name}
    >
      <TeamComponent>
        <Box>
          <Image
            src={`https://cdn.celtics.com/logos/teams/latest/svg/${abbreviation}.svg`}
            alt={`${abbreviation} Icon`}
            width={150}
            height={150}
          />
        </Box>
      </TeamComponent>
    </Link>
  );
}
