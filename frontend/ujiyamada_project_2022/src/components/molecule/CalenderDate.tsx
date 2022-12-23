import { Box, Typography } from "@mui/material";

const CalenderDate:React.FC = () => {
    return(
        <>
            {data.map((data) => {return(
                <Box key={data} border='solid 0.5px rgba(0,0,0,0.5)' bgcolor='white'width='60px'>
                    <Typography textAlign='center' sx={{my:0.5}}>{data}</Typography>
                </Box>
            )})}
        </>
    )
}

export default CalenderDate;

const data = ['日','月','火','水','木','金','土'];