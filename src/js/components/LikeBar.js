import React, { Component } from 'react';

class LikeBar extends Component {

    render() {
        return (
            <div className="like-bar-container">
                <ul className="social-button-container">
                    <li><a href="#"><i className="far fa-heart"></i></a></li>
                    <li><a href="#"><i className="far fa-comment"></i></a></li>
                    <li><a href="#"><i className="far fa-share-square"></i></a></li>
                </ul>
                <div className="like-bar-container__inline-content">
                    <a href="#" className="like-counter">{this.props.nbLike} J'aime</a>
                    <span className="post-date">il y a {this.props.date} jours</span>
                </div>
            </div>
        );
    }
}

export default LikeBar;