import React, { Component } from 'react';

import Home from './pages/Home'
import About from './pages/Profile'
import Header from './layout/Header'

import '../sass/App.scss';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

    render() {
        return (
            <Router>
              <div>
                <Header />

                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={About}/>
              </div>
            </Router>
        );
    }
}

export default App;

