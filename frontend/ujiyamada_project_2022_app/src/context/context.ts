import { createContext } from "react";

type StateContextType = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

type AreaStateContextType = {
  state: string | null;
  setState: React.Dispatch<React.SetStateAction<string | null>>;
};

type DayStateContextType = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

type ItemStateContextType = {
  state: string | null;
  setState: React.Dispatch<React.SetStateAction<string | null>>;
};

export const DrawerContext = createContext<StateContextType>({} as StateContextType);
export const ModalContext = createContext<StateContextType>({} as StateContextType);
export const AreaStateContext = createContext<AreaStateContextType>({} as AreaStateContextType);
export const YearStateContext = createContext<DayStateContextType>({} as DayStateContextType);
export const MonthStateContext = createContext<DayStateContextType>({} as DayStateContextType);
export const ItemContext = createContext({} as ItemStateContextType);
