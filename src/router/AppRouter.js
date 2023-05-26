import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import SalesCloud from "../component/Sales";
import ServiceCloud from "../component/Servicecloud";
import Heroku from "../component/Heroku";
import Cpql from "../component/Cpql";
import MenuBar from "../component/MenuBar";
import ContactUs from "../component/ContanctUs";
import TopMenuBar from "../component/TopMenuBar";

const AppRouter = () => {
    const ABOUT_US_PAGE = "/aboutUS";
    const CONTANCT_US_PAGE = "/contactUs"
    const SALES_CLOUD_PAGE = "/salesCloud";
    const SERVICE_CLOUD_PAGE = "/serviceCloud";
    const HEROKU_PAGE = "/heruko";
    const CPQL_PAGE = "/cpql";

    return (
        <BrowserRouter>
            <TopMenuBar />
            <MenuBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path={ABOUT_US_PAGE} element={<About />}></Route>
                <Route path={CONTANCT_US_PAGE} element={<ContactUs />}></Route>
                <Route path={SALES_CLOUD_PAGE} element={<SalesCloud />}></Route>
                <Route path={SERVICE_CLOUD_PAGE} element={<ServiceCloud />}></Route>
                <Route path={HEROKU_PAGE} element={<Heroku />}></Route>
                <Route path={CPQL_PAGE} element={<Cpql />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;