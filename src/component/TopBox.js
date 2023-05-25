import React from "react";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBox = () => {
    const styles = {
        border: '1px solid red'
    };

    const iconStyle = {
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        margine: '10px'
    }

    return (

        <nav class="navbar navbar-inverse">
            
            <div class="container-fluid ">
            <div class="jumbotron jumbotron-fluid">
            <a href="https://www.youtube.com/c/jamesqquick">
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
                </a>
                <a href="https://www.youtube.com/c/jamesqquick">
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
                </a>
                <a href="https://www.youtube.com/c/jamesqquick">
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
                </a>
                <a href="https://www.youtube.com/c/jamesqquick">
                    <FontAwesomeIcon icon={faYoutube} size="2x" style={iconStyle} />
                </a>
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
            </div>
                
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>






    );

}
export default TopBox;