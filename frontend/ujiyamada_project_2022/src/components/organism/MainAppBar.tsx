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
                <AreaAutocomplete list={arealist} label="地区を選択"/>
            </Toolbar>
        </AppBar>
    )
}

export default MainAppBar;

const arealist = [
    { label:'大湊地区',id:1 },
    { label:'小俣地区1',id:2 },
    { label:'小俣地区2',id:3 },
    { label:'神社地区',id:4 },
    { label:'北浜地区',id:5 },
    { label:'城田地区',id:6 },
    { label:'厚生地区',id:7 },
    { label:'四郷地区',id:8 },
    { label:'修道地区',id:9 },
    { label:'進修地区',id:10 },
    { label:'早修地区',id:11 },
    { label:'豊浜地区',id:12 },
    { label:'中島地区',id:13 },
    { label:'沼木地区',id:14 },
    { label:'浜郷地区',id:15 },
    { label:'二見地区1',id:16 },
    { label:'二見地区2',id:17 },
    { label:'御薗地区1',id:18 },
    { label:'御薗地区2',id:19 },
    { label:'宮本地区',id:20 },
    { label:'明倫地区',id:21 },
    { label:'有緝地区',id:22 }
]

