import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { ItemContext } from "./ModalItem";

type typeProps = {
    list: string[]
    label: string 
}

const ItemAutocomplete: React.FC <typeProps> = (props) => {
    const {state:selectItem,setState:setSelectItem} = useContext(ItemContext);
    return(
        <Autocomplete
            disablePortal
            id="selectarea"
            value={selectItem}
            options={props.list}
            onChange={(e,v)=>{setSelectItem(v)}}
            sx={{minWidth:180, mx:'auto', bgcolor:'white', borderRadius:1}}
            renderInput={(params) => <TextField {...params} label={props.label}/>}
        />
    )
}

export default ItemAutocomplete;