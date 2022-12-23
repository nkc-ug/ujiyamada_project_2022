import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import CalenderCell from "../molecule/CalenderCell";
import CalenderDate from "../molecule/CalenderDate";
import DatePic from "../molecule/DatePick";

const Calender :React.FC = () => {
    return(
        <>
            <Box sx={{my:2,mx:6}}>
                <DatePic/>
            </Box>
            <Stack direction='row'>
                <CalenderDate/>
            </Stack>
            <Stack direction='row'>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
            </Stack>
            <Stack direction='row'>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
            </Stack>
            <Stack direction='row'>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
            </Stack>
            <Stack direction='row'>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
            </Stack>
            <Stack direction='row'>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
                <CalenderCell/>
            </Stack>
            {/* とりあえず背景色付けに */}
            <Box height='90px' />
        </>
    )
}

export default Calender;