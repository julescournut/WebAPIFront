import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="container nav-wrapper nav-bar navbar-fixed">
                        <Link to="/"><a href="#" className="brand-logo">
                            Instagramzz
                            <i className="fab fa-instagram instagram-logo"></i>
                        </a></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#"><i className="far fa-bell"></i></a></li>
                            <li><Link to="/profile"><a href="#"><i className="far fa-user"></i></a></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;