import React, { Component } from 'react';

import NavBar from '../components/NavBar'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {

    render() {
    return (
        <div>
            <NavBar/>
        </div>
    );
    }
}

export default Header;