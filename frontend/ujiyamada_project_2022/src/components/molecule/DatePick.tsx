import { IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Box, Stack } from "@mui/system";
import moment from "moment";
import { MonthStateContext } from "../page/HomePage";

const DatePic: React.FC = () => {
    const [year, setYear] = useState(moment().format('YYYY'));
    const [month, setMonth] = useState(moment().format('MM'));
    const [dateCount, setDateCount] = useState(0);
    const {state:selectMonth,setState:setSelectMonth} = useContext(MonthStateContext);

    const addDate = () => {
        setDateCount(dateCount+1);
        changeCalendar();
    }

    const subDate = () => {
        setDateCount(dateCount-1);
        changeCalendar();
    }

    const changeCalendar = () => {
        const timeData = moment();
        timeData.add(dateCount, 'months');
        setYear(timeData.format('YYYY'));
        setSelectMonth(Number(timeData.format('MM')));
    } 
    
    return(
        <Stack direction='row'>
            <IconButton onClick={subDate}>
                <ArrowCircleLeftOutlinedIcon  fontSize="large" />
            </IconButton>
            <Box sx={{mt:1.3}}>
                <Typography variant="h5" textAlign='center' sx={{mx:2}}>
                    {year}年{selectMonth}月
                </Typography>
            </Box>
            <IconButton  onClick={addDate}>
                <ArrowCircleRightOutlinedIcon fontSize="large"/>
            </IconButton>
        </Stack>
    )
}

export default DatePic;