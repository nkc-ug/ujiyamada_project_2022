import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { CalenderType } from "../../types/CalenderType";

export const CalenderCell: FC<CalenderType> = ({ holiday, day_id, day, item_id }) => {
  return (
    <>
      <Box
        bgcolor='white'
        height='90px'
        sx={{ borderBottom: 0.1, borderRight: 0.1, borderColor: "rgba(0,0,0,0.6)" }}
      >
        {holiday ? (
          <Typography textAlign='left' color='#ef5350' sx={{ pl: 0.8 }}>
            {day}
          </Typography>
        ) : day_id % 7 === 0 ? (
          <Typography textAlign='left' color='#5c6bc0' sx={{ pl: 0.8 }}>
            {day}
          </Typography>
        ) : day_id % 7 === 1 ? (
          <Typography textAlign='left' color='#ef5350' sx={{ pl: 0.8 }}>
            {day}
          </Typography>
        ) : (
          <Typography textAlign='left' sx={{ pl: 0.8 }}>
            {day}
          </Typography>
        )}
        {item_id.map((item_id) => {
          switch (item_id) {
            case 1:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#5c6bc0'
                  height='10px'
                ></Box>
              );
            case 2:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#ffee58'
                  height='10px'
                ></Box>
              );
            case 3:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#66bb6a'
                  height='10px'
                ></Box>
              );
            case 4:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#ffa726'
                  height='10px'
                ></Box>
              );
            case 5:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#ab47bc'
                  height='10px'
                ></Box>
              );
            case 6:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#ef5350'
                  height='10px'
                ></Box>
              );
            case 7:
              return (
                <Box
                  key={item_id}
                  sx={{ my: 0.2, mx: 0.1 }}
                  borderRadius='2px'
                  bgcolor='#29b6f6'
                  height='10px'
                ></Box>
              );
            default:
              break;
          }
          return <Box key={item_id}>error</Box>;
        })}
      </Box>
    </>
  );
};
