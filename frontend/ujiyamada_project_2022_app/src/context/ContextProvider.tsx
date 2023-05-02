import { FC, useState } from "react";
import {
  ModalContext,
  DrawerContext,
  AreaStateContext,
  YearStateContext,
  MonthStateContext,
  ItemContext
} from "./context";

type Props = {
  children: React.ReactNode;
};

type StringStateType = string | null;

export const ContextProvider: FC<Props> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectArea, setSelectArea] = useState<StringStateType>("大湊地区");
  const [selectYear, setSelectYear] = useState<number>(2023);
  const [selectMonth, setSelectMonth] = useState<number>(1);
  const [selectItem, setSelectItem] = useState<string | null>("");

  return (
    <ModalContext.Provider value={{ state: modalOpen, setState: setModalOpen }}>
      <DrawerContext.Provider value={{ state: drawerOpen, setState: setDrawerOpen }}>
        <AreaStateContext.Provider value={{ state: selectArea, setState: setSelectArea }}>
          <YearStateContext.Provider value={{ state: selectYear, setState: setSelectYear }}>
            <MonthStateContext.Provider value={{ state: selectMonth, setState: setSelectMonth }}>
              <ItemContext.Provider value={{ state: selectItem, setState: setSelectItem }}>
                {children}
              </ItemContext.Provider>
            </MonthStateContext.Provider>
          </YearStateContext.Provider>
        </AreaStateContext.Provider>
      </DrawerContext.Provider>
    </ModalContext.Provider>
  );
};
