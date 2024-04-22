import React from "react";
import Grid from "@mui/material/Grid";
import { MainContainer, LandingText } from "@/Theme/Landing";
import { Typography, Box } from "@mui/material";
import { Inter } from "next/font/google";
import FeaturedPlayer from "@/Components/Player/FeaturedPlayer";
import CurrentTeams from "@/Components/UI/Teams/CurrentTeams";
import Navbar from "@/Components/UI/Navbar";
import { aboutText } from "../../data.json";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <Box component={"main"} className={`${inter.className}`}>
      <Navbar />
      <MainContainer maxWidth={false} disableGutters={true}>
        <Typography
          variant="h4"
          fontWeight={700}
          marginTop={"40px"}
          textAlign={"center"}
        >
          NBA Stat Tracker
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          A Platform for everything NBA.
        </Typography>
        <Grid
          container
          justifyItems={"center"}
          sx={{
            width: "80%",
            marginY: "20px",
            maxWidth: "1200px",
          }}
        >
          {aboutText.map((text, key) => (
            <Grid key={key} item xs={12} lg={4} sx={{ paddingX: "5px" }}>
              <Typography variant="h6" fontWeight={600}>
                {text.headline}
              </Typography>
              <LandingText variant="body2" paragraph>
                {text.description}
              </LandingText>
            </Grid>
          ))}
        </Grid>
        <Box component={"section"} sx={{ width: "100%", height: "fit" }}>
          <Grid container>
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
              <FeaturedPlayer firstName="Lebron" lastName="James" />
            </Grid>

            <Grid item xs={12}>
              {/* Current teams box */}
              <CurrentTeams />
            </Grid>
          </Grid>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Index;
