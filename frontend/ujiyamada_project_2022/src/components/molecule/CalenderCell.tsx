import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type CalenderType = {
    day_id:number,
    day:number | null,
    holiday:boolean,
    item_id:[number]
};

const CalenderCell:React.FC<CalenderType> = (props) => {
    return(
        <>
            <Box border='solid 0.5px rgba(0,0,0,0.4)' bgcolor='white' height='80px'>
                {props.holiday ?
                    <Typography textAlign='left' color='red' sx={{pl:0.8}}>{props.day}</Typography>
                    :
                    props.day_id % 7 === 0 ?
                        <Typography textAlign='left' color='blue' sx={{pl:0.8}}>{props.day}</Typography>
                        :
                        props.day_id % 7 === 1 ?
                            <Typography textAlign='left' color='red' sx={{pl:0.8}}>{props.day}</Typography>    
                            :
                            <Typography textAlign='left' sx={{pl:0.8}}>{props.day}</Typography>
                }
                {props.item_id.map((item_id) => {
                    switch (item_id){
                        case 1:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='blue' height='10px'></Box>)
                        case 2:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='yellow' height='10px'></Box>)
                        case 3:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='green' height='10px'></Box>)
                        case 4:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='orange' height='10px'></Box>)
                        case 5:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='purple' height='10px'></Box>)
                        case 6:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='red' height='10px'></Box>)
                        case 7:
                            return(<Box key={item_id} sx={{my:0.1, mx:0.1}} borderRadius='2px' bgcolor='skyblue' height='10px'></Box>)
                        default:
                            break;
                    }
                    return(<Box>error</Box>);
                })}
            </Box>
        </>
    )
}

export default CalenderCell;