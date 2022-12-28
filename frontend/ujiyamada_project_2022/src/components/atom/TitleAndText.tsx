import { Box, Typography } from "@mui/material";

type TitleAndTextType = {
    title:string,
    text:string|null
}

const TitleAndText:React.FC <TitleAndTextType> = (props) => {
    return(
        <>
            <Box bgcolor='rgba(0,0,0,0.2)'>
                <Typography sx={{py:0.5}} variant="subtitle1" fontWeight='medium' textAlign='center'>{props.title}</Typography>
            </Box>
            <Typography sx={{p:1}} variant="body1">{props.text}</Typography>
        </>
    )
}

export default TitleAndText;