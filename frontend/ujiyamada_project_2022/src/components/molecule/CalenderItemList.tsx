import { Box, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const CalenderItemList = () => {
    return(
        <Grid2 sx={{m:3}} bgcolor='red' container>
            {itemList.map((item) => {
                return(
                    <Grid2 sx={{m:1}}>{item.itemName}だよ</Grid2>
                )
            })}
        </Grid2>
    )
}

export default CalenderItemList;

const itemList = [
    {
        itemName:'',
        color:'blue'
    },
    {
        itemName:'',
        color:'yellow'
    },
    {
        itemName:'',
        color:'green'
    },
    {
        itemName:'',
        color:'orange'
    },
    {
        itemName:'',
        color:'purple'
    },
    {
        itemName:'',
        color:'red'
    },
    {
        itemName:'',
        color:'skyblue'
    }
]