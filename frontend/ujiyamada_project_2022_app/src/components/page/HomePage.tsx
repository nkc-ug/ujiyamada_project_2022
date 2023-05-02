import { ContextProvider } from "../../context/ContextProvider";
import { Body } from "../organism/Body";
import { MainLayout } from "../template/MainLayout";
import { FC } from "react";

export const HomePage: FC = () => {
  return (
    <ContextProvider>
      <MainLayout>
        <Body />
      </MainLayout>
    </ContextProvider>
  );
};
