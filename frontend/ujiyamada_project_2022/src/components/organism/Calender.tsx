import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "../../util/axiosUtil";
import { useContext, useEffect, useState } from "react";
import CalenderCell from "../molecule/CalenderCell";
import CalenderDate from "../molecule/CalenderDate";
import DatePic from "../molecule/DatePick";
import { AreaStateContext, MonthStateContext } from "../page/HomePage";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Calender :React.FC = () => {
    const {state:selectArea,setState:setSelectArea} = useContext(AreaStateContext);
    const {state:selectMonth,setState:setSelectMonth} = useContext(MonthStateContext);
    const [calenderData, setCalenderData] = useState([]);

    useEffect(() => {
        axios.get(`/api/calender/${selectArea}/${selectMonth}`).then((res:any) =>{
            setCalenderData(res.data);
        })
    },[selectArea,selectMonth]);
    
    console.log(calenderData);

    return(
        <>
            <Box sx={{my:2,mx:6}}>
                <DatePic/>
            </Box>
            <Grid2 container columns={7}>
                {data.map((dayofweek) => {
                    return(
                        <Grid2 xs={1}>
                            <CalenderDate dayofweek={dayofweek} />
                        </Grid2>
                    )
                })}
            </Grid2>
            <Grid2 container columns={7}>
                {calenderData.map((calenderData) => {
                    return(
                    <Grid2 xs={1}>
                        <CalenderCell/>
                    </Grid2>
                    )
                })}
            </Grid2>
        </>
    )
}

export default Calender;

const data = ['日','月','火','水','木','金','土'];