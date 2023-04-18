import { Body } from "../organism/Body";
import { MainLayout } from "../template/MainLayout";
import { ContextProvider } from "../context/contextProvider";
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
