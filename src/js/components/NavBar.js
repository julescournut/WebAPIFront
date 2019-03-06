import React, { Component } from 'react';


import { Link } from "react-router-dom";

class NavBar extends Component {

    state = {
        access_token: localStorage.getItem("token")
    };

    signout(e) {
        localStorage.removeItem("token");
        window.location.reload();
    };

    render() {
        if (this.state.access_token != null) {
            return (
                <div className="navbar-fixed">
                    <nav>
                        <div className="container nav-wrapper nav-bar navbar-fixed">
                            <Link to="/"><span className="brand-logo">
                                Instagramzz
                                <i className="fab fa-instagram instagram-logo"></i>
                            </span></Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/profile"><span><i className="far fa-user"></i></span></Link></li>
                                <li><button className="no-style-button" onClick={this.signout}><i className="fas fa-sign-out-alt"></i></button></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            );
        } else {
            return (""
            );
        }
    }
}

export default NavBar;