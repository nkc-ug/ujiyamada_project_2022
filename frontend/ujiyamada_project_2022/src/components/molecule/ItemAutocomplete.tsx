import { Autocomplete, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "../../util/axiosUtil";
import { ItemContext } from "./ModalItem";

const ItemAutocomplete: React.FC = () => {
    const {state:selectItem,setState:setSelectItem} = useContext(ItemContext);
    const [itemList, setItemList] = useState<string[]>([]);
    const [inputText, setInputText] = useState<string>("");

    // 2回目以降のstateへの配列のセットが行えないため一旦空配列
    useEffect(()=>{
        axios.get(`api/divide/${inputText}`).then((res:any) =>{
            setItemList([...res.data]);
        })
    },[])

    return(
        <Autocomplete
            value={selectItem}
            onChange={(e,v) => {setSelectItem(v)}}

            inputValue={inputText}
            onInputChange={(e,v) => {setInputText(v)}}

            disablePortal
            id="selectArea"
            options={itemList}
            sx={{minWidth:180, mx:'auto', bgcolor:'white', borderRadius:1}}
            renderInput={(params) => <TextField {...params} label={'分別検索'}/>}
        />
    )
}

export default ItemAutocomplete;