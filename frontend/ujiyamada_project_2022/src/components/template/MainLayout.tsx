import { Box } from "@mui/system";
import React from "react";
import MainAppBar from "../organism/MainAppBar";

type LayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = (props) => {
    return(
        <Box sx={{bgcolor:'secondary.main'}}>
            <MainAppBar/>
            <Box sx={{m:1}} >{props.children}</Box>
        </Box>
        
    )
}

export default MainLayout;