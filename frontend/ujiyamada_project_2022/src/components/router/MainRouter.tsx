import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../page/ErrorPage";
import HomePage from "../page/HomePage";

const MainRouter:React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;