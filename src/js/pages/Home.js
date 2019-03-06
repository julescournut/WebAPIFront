import React, { Component } from 'react'

import PostList from '../components/PostList'
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className="container post-container">
                <div className="row">
                    <div className="col s12 m9">
                        <Link className="btn waves-effect waves-ligh add-post-btn" to="/createPost">+ Ajouter un post</Link>
                        <PostList apiUrl={this.props.apiUrl} isProfile={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;