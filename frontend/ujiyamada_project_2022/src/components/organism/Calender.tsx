import { Box } from "@mui/material";
import axios from "../../util/axiosUtil";
import { useContext, useEffect, useState } from "react";
import CalenderCell from "../molecule/CalenderCell";
import CalenderDate from "../molecule/CalenderDate";
import DatePic from "../molecule/DatePick";
import { AreaStateContext, MonthStateContext } from "../page/HomePage";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type CalenderType = {
    day_id:number,
    day:number | null,
    holiday:boolean,
    item_id:[number]
};

const Calender :React.FC = () => {
    const {state:selectArea} = useContext(AreaStateContext);
    const {state:selectMonth} = useContext(MonthStateContext);
    const [calenderData, setCalenderData] = useState([]);

    useEffect(() => {
        axios.get(`/api/calender/${selectArea}/${selectMonth}`).then((res:any) =>{
            setCalenderData(res.data);
        })
    },[selectArea,selectMonth]);
    
    return(
        <>
            <Box sx={{my:2,mx:7}}>
                <DatePic/>
            </Box>
            <Grid2 container columns={7}>
                {data.map((dayofweek) => {
                    return(
                        <Grid2 key={dayofweek} xs={1}>
                            <CalenderDate dayofweek={dayofweek} />
                        </Grid2>
                    )
                })}
            </Grid2>
            <Grid2 container columns={7}>
                {calenderData.map((calenderData:CalenderType) => {
                    return(
                    <Grid2 key={calenderData.day_id} xs={1}>
                        <CalenderCell day_id={calenderData.day_id} day={calenderData.day} holiday={calenderData.holiday} item_id={calenderData.item_id} />
                    </Grid2>
                    )
                })}
            </Grid2>
            <Box sx={{mx:10}} bgcolor='secondary.main' height='100px'>

            </Box>
        </>
    )
}

export default Calender;

const data = ['日','月','火','水','木','金','土'];