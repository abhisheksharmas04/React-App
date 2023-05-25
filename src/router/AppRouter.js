import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const AppRouter = () => {
    const ABOUT_US_PAGE = "/aboutUS";
    return (
        <BrowserRouter>
            <nav class="navbar navbar-default">
                <div class="jumbotron jumbotron-fluid justify-content-between">
                    <div class="row no-gutters">
                        <div class="col-12 col-sm-6 col-md-8">
                            <div class="navbar-header justify-content-between">
                                <Link class="navbar-brand" to="/">WebSiteName</Link>
                            </div>
                        </div>
                        <div class="col-6 col-md-4">
                            <a href="https://www.youtube.com/c/jamesqquick">
                                <FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon>
                            </a>
                            <a href="https://www.youtube.com/c/jamesqquick">
                                <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
                            </a>
                            <a href="https://www.youtube.com/c/jamesqquick">
                                <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                            </a>
                            <a href="https://www.youtube.com/c/jamesqquick">
                                <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to={ABOUT_US_PAGE}>About Us</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path={ABOUT_US_PAGE} element={<About />}></Route>
            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;