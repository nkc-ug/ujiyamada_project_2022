import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { createContext, useState } from "react";
import ItemAutocomplete from "./ItemAutocomplete";

type StateContextType = {
    state : string | null;
    setState: React.Dispatch<React.SetStateAction<string|null>>;
};

type UseStateType = string | null ;

export const ItemContext = createContext({} as StateContextType)

const ModalItem = () => {
    const [selectItem,setSelectItem] = useState<UseStateType>("");
    return(
        <ItemContext.Provider value={{state:selectItem,setState:setSelectItem}}>
            <ItemAutocomplete/>
            <Box sx={{ height:400, mt:3, border:'solid 0.5px', borderRadius:3}}>
                <Typography sx={{p:2}} variant="subtitle1">{selectItem}</Typography>
            </Box>
        </ItemContext.Provider>
    )
}

export default ModalItem;

