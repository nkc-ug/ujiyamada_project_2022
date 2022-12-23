import { Box, Typography } from "@mui/material";

type PropsType = {dayofweek:string};

const CalenderDate:React.FC <PropsType> =(props) => {
    return(
        <>
            <Box border='solid 0.5px rgba(0,0,0,0.5)' bgcolor='white'width='60px'>
                <Typography textAlign='center' sx={{my:0.5}}>{props.dayofweek}</Typography>
            </Box>
        </>
    )
}

export default CalenderDate;