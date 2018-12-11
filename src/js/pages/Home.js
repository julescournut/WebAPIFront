import React, { Component } from 'react';

import Post from '../components/Post'

class Home extends Component {

    render() {
        return (
            <div className="container">
                <Post/>
            </div>
        );
    }
}

export default Home;