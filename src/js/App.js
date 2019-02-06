import React, { Component } from 'react';

import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import Header from './layout/Header'

import '../sass/App.scss'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const apiUrl = "http://51.255.175.186:5000/api/v1/";

class App extends Component {


    render() {
        return (
            <Router>
              <div>
                <Header />

                <Route exact path="/" render={() => <Home apiURL={apiUrl}/>}/>
                <Route path="/profile" render={() => <About apiURL={apiUrl}/>}/>
                <Route path="/auth" render={() => <Auth apiURL={apiUrl}/>}/>
              </div>
            </Router>
        );
    }
}

export default App;

