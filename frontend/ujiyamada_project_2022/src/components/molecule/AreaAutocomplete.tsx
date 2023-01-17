import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { AreaStateContext } from "../page/HomePage";

const AreaAutocomplete: React.FC = () => {
    const {state:selectArea,setState:setSelectArea} = useContext(AreaStateContext);
    return(
        <Autocomplete
            disablePortal
            id="selectarea"
            value={selectArea}
            options={arealist}
            onChange={(e,v)=>{setSelectArea(v)}}
            sx={{minWidth:180, mx:'auto', bgcolor:'white', borderRadius:1}}
            renderInput={(params) => <TextField {...params} label={"地区を選択"}/>}
        />
    )
}

export default AreaAutocomplete;

const arealist = [
   '大湊地区',
   '小俣地区1',
   '小俣地区2',
   '神社地区',
   '北浜地区',
   '城田地区',
   '厚生地区',
   '四郷地区',
   '修道地区',
   '進修地区',
   '早修地区',
   '豊浜地区',
   '中島地区',
   '沼木地区',
   '浜郷地区',
   '二見地区1', 
   '二見地区2',
   '御薗地区1',
   '御薗地区2',
   '宮本地区',
   '明倫地区',
   '有緝地区',
]