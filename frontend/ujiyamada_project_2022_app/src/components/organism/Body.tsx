import { Box } from "@mui/material";
import { FC, createContext } from "react";
import { Calender } from "./Calender";
import { LeftDrawer } from "./LeftDrawer";
import SearchModal from "./SearchModal";

export const Context = createContext(false);

export const Body: FC = () => {
  return (
    <>
      <Box>
        <Calender />
      </Box>
      <LeftDrawer />
      <SearchModal />
    </>
  );
};
