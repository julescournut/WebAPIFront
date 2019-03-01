import React, { Component } from 'react';

class Comment extends Component {

    render() {
        return (
            <div>
                <a className="comment-owner" href="#" >{this.props.user}</a>
                <span className="comment-content">{this.props.content}</span>
            </div>
        );
    }
}

export default Comment;