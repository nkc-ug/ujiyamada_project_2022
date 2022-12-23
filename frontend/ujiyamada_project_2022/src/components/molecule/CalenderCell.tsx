import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const CalenderCell:React.FC = () => {
    return(
        <Box border='solid 0.5px rgba(0,0,0,0.5)' bgcolor='white' height='80px' width='60px'>
            <Typography textAlign='left' sx={{pl:0.8}}>{CalenderData[0].day}</Typography>
            {CalenderData[0].classification.map((day,classfication) => {return(<Box key={day} sx={{mx:'auto',mb:0.3}} height='10px' width='45px' bgcolor='red'></Box>)})}
        </Box>
    )
}

export default CalenderCell;

const CalenderData = [
    {
        day:1,
        classification:[
            // 'error.main',
        ]
    },
    {
        day:2,
        classification:[
            'error.main',
            'info.main'
        ]
    },
    {
        day:3,
        classification:[
            'error.main',
            'info.main'
        ]
    }
]