import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const GameCard: React.FC<{
  awayTeam: string;
  homeTeam: string;
  date: string;
}> = ({
  awayTeam,
  homeTeam,
  date,
}: {
  awayTeam: string;
  homeTeam: string;
  date: string;
}) => {
  return (
    <Card
      sx={{
        width: "70%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        marginX: "60px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          marginBottom: "-10px",
        }}
      >
        <CardMedia
          component={"img"}
          image={`https://cdn.celtics.com/logos/teams/latest/svg/${awayTeam}.svg`}
          sx={{ width: "30%", height: "auto" }}
        ></CardMedia>
        <CardMedia
          component={"img"}
          image={`https://cdn.celtics.com/logos/teams/latest/svg/${homeTeam}.svg`}
          sx={{ width: "30%", height: "auto" }}
        ></CardMedia>
      </Box>
      <CardContent component="span">
        <Typography
          variant="h6"
          sx={{ textAlign: "center" }}
        >{`${awayTeam} vs ${homeTeam}`}</Typography>
        <Typography sx={{ textAlign: "center" }}>
          {new Date(date).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
