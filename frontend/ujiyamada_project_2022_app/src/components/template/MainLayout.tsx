import { Box } from "@mui/system";
import { MainAppBar } from "../organism/MainAppBar";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ bgcolor: "secondary.main" }}>
      <MainAppBar />
      <Box>{children}</Box>
    </Box>
  );
};
