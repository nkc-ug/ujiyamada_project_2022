import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/system";

type PropsType = {
    day_id:number,
    day:number | null,
    holiday:boolean,
    item_id:[number]
};

const CalenderCell:React.FC<PropsType> = (props) => {
    const {day} = props;
    return(
        <Box border='solid 0.5px rgba(0,0,0,0.5)' bgcolor='white' height='80px' width='60px'>
            <Typography textAlign='left' sx={{pl:0.8}}>{day}</Typography>
        </Box>
    )
}

export default CalenderCell;

const CalenderData = [
    {
        day:1,
        classification:[
            'error.main',
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