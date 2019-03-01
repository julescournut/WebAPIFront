import React, { Component } from 'react';

import Avatar from '../components/Avatar'
import Comment from '../components/Comment'
import InputComment from '../components/InputComment'
import LikeBar from '../components/LikeBar'

class Post extends Component {

    render() {
        return (
            <div className="card">
                <Avatar user={this.props.user} />
                <div className="card-image post-img">
                    <img src={this.props.image} />
                </div>
                <div className="card-content comment-container">
                    {/*<LikeBar/>*/}
                    <Comment user={this.props.user} content={this.props.description} />
                    {/*<InputComment/>*/}
                </div>
            </div>
        );
    }
}

export default Post;