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
                    <img src={this.props.imgURL} />
                </div>
                <div className="card-content comment-container">
                    <LikeBar nbLike={this.props.nbLike} date={this.props.date}/>
                    {this.props.comments.map((comment) => <Comment user={comment.user}
                                                                   content={comment.content} />)}
                    <InputComment/>
                </div>
            </div>
        );
    }
}

export default Post;