import { createContext, useState } from "react";
import Body from "../organism/Body";
import MainLayout from "../template/MainLayout";

type StateContextType = {
    state : boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DrawerContext = createContext<StateContextType>({} as StateContextType);
export const ModalContext = createContext<StateContextType>({} as StateContextType);

const HomePage:React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <ModalContext.Provider value={{state:modalOpen, setState:setModalOpen}}>
            <DrawerContext.Provider value={{state:drawerOpen, setState:setDrawerOpen}}>
                <MainLayout>
                    <Body/>
                </MainLayout>
            </DrawerContext.Provider>
        </ModalContext.Provider>
    )
}

export default HomePage;