import { ReactNode, MouseEventHandler } from "react";
import { Button } from "@mui/material";

const ChartButton = ({
  children,
  active,
  handler,
}: {
  children: ReactNode;
  active: string;
  handler: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      variant={active == children ? "contained" : "outlined"}
      sx={{ marginX: "10px", textTransform: "none" }}
      size="small"
      onClick={handler}
    >
      {children}
    </Button>
  );
};

export default ChartButton;
