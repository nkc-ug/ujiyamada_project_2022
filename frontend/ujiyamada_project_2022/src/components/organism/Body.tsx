import { Box } from "@mui/material";
import { createContext} from "react";
import Calender from "./Calender";
import LeftDrawer from "./LeftDrawer";
import SearchModal from "./SearchModal";

export const Context= createContext(false);

const Body = () => {
    return(
        <>
            <Box>
                <Calender/>
            </Box>
            <LeftDrawer/>
            <SearchModal/>
        </>
    )
}

export default Body;