import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "../../util/axiosUtil";
import TitleAndText from "../atom/TitleAndText";
import { ItemContext } from "./ModalItem";

type DivideTextType = {
    "divide": string,
    "description": string
}

const DivideDisplay:React.FC = () => {
    const {state:selectItem,setState:setSelectItem} = useContext(ItemContext)
    const [divideText,setDivideText] = useState<DivideTextType>({divide:"",description:""});

    useEffect(() => {
        axios.get(`api/divide/item/${selectItem}`).then((res:any) => {
            setDivideText(res.data);
        })
    },[selectItem])

    return(
        <Box sx={{ height:400, mt:3, border:'solid 1px', borderRadius:3, borderColor: 'rgba(0,0,0,0.3)'}}>
            <Box sx={{my:2}}>
                {selectItem === "" || selectItem === null ?
                <></>
                :
                <>
                    <TitleAndText title='品目名' text={selectItem}/>
                    <TitleAndText title='分別' text={divideText?.divide}/>
                    <TitleAndText title='注意点' text={divideText?.description}/>  
                </>
                }
            </Box>
        </Box>
    )
}

export default DivideDisplay;