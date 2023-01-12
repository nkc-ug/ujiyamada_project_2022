import { Box, Typography } from "@mui/material";

type PropsType = {dayofweek:string};

const CalenderDate:React.FC <PropsType> =(props) => {
    return(
        <>
            <Box bgcolor='#F2F2F2' sx={{borderBottom: 0.1, borderRight: 0.1, borderTop:0.01, borderColor: 'rgba(0,0,0,0.6)'}}>
                <Typography textAlign='center' sx={{my:0.5}}>{props.dayofweek}</Typography>
            </Box>
        </>
    )
}

export default CalenderDate;