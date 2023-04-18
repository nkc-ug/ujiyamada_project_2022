import { Box, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  title: string;
  text: string | null;
};

export const TitleAndText: FC<Props> = ({ title, text }) => {
  return (
    <>
      <Box bgcolor='rgba(0,0,0,0.2)'>
        <Typography sx={{ py: 0.5 }} variant='subtitle1' fontWeight='medium' textAlign='center'>
          {title}
        </Typography>
      </Box>
      <Typography sx={{ p: 1 }} variant='body1'>
        {text}
      </Typography>
    </>
  );
};
