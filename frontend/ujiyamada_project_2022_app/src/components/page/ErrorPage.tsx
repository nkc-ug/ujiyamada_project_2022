import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MainLayout } from "../template/MainLayout";

export const ErrorPage: FC = () => {
  return (
    <MainLayout>
      <Box sx={{ height: 1000, mt: 5 }}>
        <Typography variant='h5' textAlign='center'>
          ページが存在しません。
        </Typography>
      </Box>
    </MainLayout>
  );
};
