import React, { Component } from 'react'

import PostList from '../components/PostList'
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="container post-container">
                <div className="row">
                    <div className="col s12 m9">
                        <Link to="/createPost"><span>+ Ajouter un post</span></Link>
                        <PostList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;