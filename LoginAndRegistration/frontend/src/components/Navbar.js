
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/theme/css/style.css";
import "../assets/mobirise/css/mbr-additional.css?v=KdrcYL";
import "../assets/mobirise/css/mbr-additional.css?v=KdrcYL";

import myPostsLogo from "../assets/images/my_posts_logo.png";

 {/* Site made with Mobirise Website Builder v5.9.18, https://mobirise.com */}
 function Navbar() {
    return (

<section data-bs-version="5.1" className="menu menu5 cid-uoDfLHQBFj" once="menu" id="menu05-2">
	

<nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
    <div className="container">
        <div className="navbar-brand">
            <span className="navbar-logo">
                    <img src={myPostsLogo} style={{ height: '4.3rem' }}/>
            </span>
            <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-4" href="https://mobiri.se">MyPost</a></span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item">
                     {/* The IIE (2024) demonstrates how to use <NavLink> */}
                    <NavLink className="nav-link link text-black display-4" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                     {/* The IIE (2024) demonstrates how to use <NavLink> */}
                     <NavLink className="nav-link link text-black display-4" to="/">Posts</NavLink>
                </li>
                 <li className="nav-item">
                     {/* The IIE (2024) demonstrates how to use <NavLink> */}
                     <NavLink className="nav-link link text-black display-4" to="/signup">Register</NavLink>
                </li>
                </ul>

            
        </div>
    </div>
</nav>
</section>
);
};

export default Navbar;

/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311 Learn]. The Independent Institute of Education: Unpublished.
*/
