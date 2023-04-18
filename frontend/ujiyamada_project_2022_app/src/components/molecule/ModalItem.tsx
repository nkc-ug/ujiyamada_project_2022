import { FC } from "react";
import { ItemAutocomplete } from "./ItemAutocomplete";
import DivideDisplay from "./divideDisplay";

export const ModalItem: FC = () => {
  return (
    <>
      <ItemAutocomplete />
      <DivideDisplay />
    </>
  );
};
