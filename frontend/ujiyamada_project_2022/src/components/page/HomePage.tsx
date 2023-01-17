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

type DayStateContextType = {
    state : number;
    setState: React.Dispatch<React.SetStateAction<number>>;
};

type StringStateType = string | null;
type NumStateType = number | null;

export const DrawerContext = createContext<StateContextType>({} as StateContextType);
export const ModalContext = createContext<StateContextType>({} as StateContextType);
export const AreaStateContext = createContext<AreaStateContextType>({} as AreaStateContextType);
export const YearStateContext = createContext<DayStateContextType>({} as DayStateContextType);
export const MonthStateContext = createContext<DayStateContextType>({} as DayStateContextType);

const HomePage:React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectArea, setSelectArea] = useState<StringStateType>("大湊地区");
    const [selectYear, setSelectYear] = useState<number>(2023)
    const [selectMonth, setSelectMonth] = useState<number>(1)
    
    return (
        <ModalContext.Provider value={{state:modalOpen, setState:setModalOpen}}>
            <DrawerContext.Provider value={{state:drawerOpen, setState:setDrawerOpen}}>
                <AreaStateContext.Provider value={{state:selectArea,setState:setSelectArea}}>
                    <YearStateContext.Provider value={{state:selectYear,setState:setSelectYear}}>
                        <MonthStateContext.Provider value={{state:selectMonth,setState:setSelectMonth}}>
                            <MainLayout>
                                <Body/>
                            </MainLayout>
                        </MonthStateContext.Provider>
                    </YearStateContext.Provider>
                </AreaStateContext.Provider>
            </DrawerContext.Provider>
        </ModalContext.Provider>
    )
}

export default HomePage;