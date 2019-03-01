import React, { Component } from 'react';

import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import CreateUser from './pages/CreateUSer'
import CreatePost from './pages/CreatePost'
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

                <Route exact path="/" render={() => { if (localStorage.getItem("token") != null) { return <Home apiURL={apiUrl}/>} else {return <Auth apiURL={apiUrl}/>}}} />
                <Route path="/profile" render={() => { if (localStorage.getItem("token") != null) { return <About apiURL={apiUrl}/>} else {return <Auth apiURL={apiUrl}/>}}}/>
                <Route path="/auth" render={() => <Auth apiURL={apiUrl}/>}/>
                <Route path="/createUser" render={() => <CreateUser apiURL={apiUrl}/>}/>
                <Route path="/createPost" render={() => <CreatePost apiURL={apiUrl}/>}/>
              </div>
            </Router>
        );
    }
}

export default App;

