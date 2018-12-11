import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper nav-bar">
                    <Link to="/"><a href="#" className="brand-logo">
                        Instagramzz
                        <i className="fab fa-instagram instagram-logo"></i>
                    </a></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#"><i className="far fa-compass"></i></a></li>
                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                        <li><Link to="/about"><a href="#"><i className="far fa-user"></i></a></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;