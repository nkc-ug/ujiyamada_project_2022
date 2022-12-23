import moment from "moment";
import { createContext, useState } from "react";
import Body from "../organism/Body";
import MainLayout from "../template/MainLayout";

type StateContextType = {
    state : boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};

type AreaStateContextType = {
    state : string | null;
    setState: React.Dispatch<React.SetStateAction<string|null>>;
};

type MonthStateContextType = {
    state : number | null;
    setState: React.Dispatch<React.SetStateAction<number|null>>;
};

type StringStateType = string | null;
type NumStateType = number | null;

export const DrawerContext = createContext<StateContextType>({} as StateContextType);
export const ModalContext = createContext<StateContextType>({} as StateContextType);
export const AreaStateContext = createContext<AreaStateContextType>({} as AreaStateContextType);
export const MonthStateContext = createContext<MonthStateContextType>({} as MonthStateContextType);

const HomePage:React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectArea, setSelectArea] = useState<StringStateType>("oominato");
    const [selectMonth, setSelectMonth] = useState<NumStateType>(Number(moment().format('MM')))

    return (
        <ModalContext.Provider value={{state:modalOpen, setState:setModalOpen}}>
            <DrawerContext.Provider value={{state:drawerOpen, setState:setDrawerOpen}}>
                <AreaStateContext.Provider value={{state:selectArea,setState:setSelectArea}}>
                    <MonthStateContext.Provider value={{state:selectMonth,setState:setSelectMonth}}>
                        <MainLayout>
                            <Body/>
                        </MainLayout>
                    </MonthStateContext.Provider>
                </AreaStateContext.Provider>
            </DrawerContext.Provider>
        </ModalContext.Provider>
    )
}

export default HomePage;