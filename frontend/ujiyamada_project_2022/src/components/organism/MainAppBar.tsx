import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { DrawerContext } from "../page/HomePage";
import AreaAutocomplete from "../molecule/AreaAutocomplete";

const MainAppBar: React.FC = () => {
    const {state:drawerOpen ,setState:setDrawerOpen} = useContext(DrawerContext);

    return(
        <AppBar position='static'>
            <Toolbar sx={{bgcolor:'primary.main', height:70, mx:1}}>
                <IconButton onClick={()=>{setDrawerOpen(!drawerOpen)}}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <AreaAutocomplete/>
            </Toolbar>
        </AppBar>
    )
}

export default MainAppBar;