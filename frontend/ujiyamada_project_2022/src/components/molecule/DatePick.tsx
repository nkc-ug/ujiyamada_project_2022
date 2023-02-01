import { IconButton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Box, Stack } from "@mui/system";
import moment from "moment";
import { MonthStateContext, YearStateContext } from "../page/HomePage";

const DatePic: React.FC = () => {

    const {state:selectYear,setState:setSelectYear} = useContext(YearStateContext);
    const {state:selectMonth,setState:setSelectMonth} = useContext(MonthStateContext);
    const nowYear = Number(moment().format('YYYY'));
    const nowMonth = Number(moment().format('MM'));
    
    useEffect(() => {
        setSelectYear(Number(moment().format('YYYY')));
        setSelectMonth(Number(moment().format('MM')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const addDate = () => {
        if(selectMonth + 1 === 13){
            setSelectYear(selectYear + 1);
            setSelectMonth(1);
        }
        else{
            if(selectMonth+1 != 4){
                setSelectMonth(selectMonth + 1);
            }
        }
    }

    const subDate = () => {
        if(selectMonth - 1 === 0){
            setSelectYear(selectYear - 1);
            setSelectMonth(12);
        }
        else{
            if(selectMonth-1 != 3){
                setSelectMonth(selectMonth - 1);
            }
        }
    }
    
    return(
        <Stack direction='row'>
            <IconButton onClick={subDate}>
                <ArrowCircleLeftOutlinedIcon  fontSize="large" />
            </IconButton>
            <Box sx={{my:1.5}}>
                <Typography variant="h5" textAlign='center' sx={{mx:2}}>
                    {selectYear}年{selectMonth}月
                </Typography>
            </Box>
            <IconButton  onClick={addDate}>
                <ArrowCircleRightOutlinedIcon fontSize="large"/>
            </IconButton>
        </Stack>
    )
}

export default DatePic;