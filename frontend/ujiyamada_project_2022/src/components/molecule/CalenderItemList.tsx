import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";


const CalenderItemList:React.FC = () => {
    return(
        <Grid2 sx={{m:2}} container>
            {itemList.map((item) => {
                switch(item.color){
                    case 1:
                        return(
                        <Stack direction='row' key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}}/>
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 2:
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} />
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 3:
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} color='success'/>
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 4: 
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} color='warning'/>
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 5:
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} />
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 6:
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} color='error'/>
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    case 7:
                        return(
                        <Stack direction='row'key={item.color} sx={{mx:1,my:0.8}}>
                            <TaskAltIcon sx={{mr:0.8}} color='info'/>
                            <Typography>{item.itemName}</Typography>
                        </Stack>)
                    default:
                        return(<Box>エラーが発生しました</Box>)
                }
            })}
            <Box height='80px' bgcolor='primary'/>
        </Grid2>
   )
}

export default CalenderItemList;

const itemList = [
    {
        itemName:'ガラス・くずびん類・陶磁器類',
        color:1
    },
    {
        itemName:'布類・段ボール類',
        color:2
    },
    {
        itemName:'資源びん',
        color:3
    },
    {
        itemName:'プラスチック',
        color:4
    },
    {
        itemName:'ペットボトル',
        color:5
    },
    {
        itemName:'燃えるごみ',
        color:6
    },
    {
        itemName:'紙類(新聞・折込チラシ・飲料用紙パック・雑誌・雑がみ類)',
        color:7
    }
]