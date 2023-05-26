import React from "react";
import { Link } from "react-router-dom";
const MenuBar = () => {
    const ABOUT_US_PAGE = "/aboutUS";
    const CONTANCT_US_PAGE = "/contactUs"
    const SALES_CLOUD_PAGE = "/salesCloud";
    const SERVICE_CLOUD_PAGE = "/serviceCloud";
    const HEROKU_PAGE = "/heruko";
    const CPQL_PAGE = "/cpql";
    
    return (
        <div className="row justify-content-center bg-primary">
            <nav className="navbar navbar-expand-lg navbar-dark" >
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={ABOUT_US_PAGE}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={CONTANCT_US_PAGE}>Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Product
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to={SALES_CLOUD_PAGE}>Sales</Link>
                                <Link className="dropdown-item" to={SERVICE_CLOUD_PAGE}>Service Cloud</Link>
                                <Link className="dropdown-item" to={HEROKU_PAGE}>Heroku</Link>
                                <Link className="dropdown-item" to={CPQL_PAGE}>Cpql</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}
export default MenuBar;