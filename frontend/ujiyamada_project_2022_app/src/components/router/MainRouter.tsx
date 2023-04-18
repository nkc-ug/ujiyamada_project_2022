import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { FC } from "react";
import { ErrorPage } from "../page/ErrorPage";

export const MainRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
