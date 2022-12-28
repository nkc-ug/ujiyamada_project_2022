import { createContext, useState } from "react";
import DivideDisplay from "./divideDisplay";
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
            <DivideDisplay/>
        </ItemContext.Provider>
    )
}

export default ModalItem;

