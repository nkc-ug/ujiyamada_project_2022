import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = { dayOfWeek: string };

export const CalenderDate: FC<Props> = ({ dayOfWeek }) => {
  return (
    <>
      <Box
        bgcolor='#F2F2F2'
        sx={{
          borderBottom: 0.1,
          borderRight: 0.1,
          borderTop: 0.01,
          borderColor: "rgba(0,0,0,0.6)"
        }}
      >
        <Typography textAlign='center' sx={{ my: 0.5 }}>
          {dayOfWeek}
        </Typography>
      </Box>
    </>
  );
};
