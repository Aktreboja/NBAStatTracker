"use client";
import styled from "@emotion/styled";
import { Container, Typography, Box } from "@mui/material";
import { TypographyProps } from "@mui/material";

interface TitleTypographyProps extends TypographyProps {}

// Main container
export const MainContainer = styled(Container)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const LandingText = styled(Typography)(({ theme }) => ({
  marginX: "5px",
}));
