import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="container nav-wrapper nav-bar navbar-fixed">
                        <Link to="/"><span className="brand-logo">
                            Instagramzz
                            <i className="fab fa-instagram instagram-logo"></i>
                        </span></Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/auth"><span><i className="far fa-bell"></i></span></Link></li>
                            <li><Link to="/profile"><span><i className="far fa-user"></i></span></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;