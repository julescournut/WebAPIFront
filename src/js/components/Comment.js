import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return (
            <div>
                <span className="comment-owner">{this.props.user}</span>
                <span className="comment-content">{this.props.content}</span>
            </div>
        );
    }
}

export default Comment;