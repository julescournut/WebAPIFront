import React, { Component } from 'react';

class LikeBar extends Component {

    render() {
        return (
            <div className="like-bar-container">
                <ul className="social-button-container">
                    <li><button className="no-style-button"><i className="far fa-heart"></i></button></li>
                    <li><button className="no-style-button"><i className="far fa-comment"></i></button></li>
                    <li><button className="no-style-button"><i className="far fa-share-square"></i></button></li>
                </ul>
                <div className="like-bar-container__inline-content">
                    <button className="like-counter no-style-button">127 J'aime</button>
                    <span className="post-date">il y a 4 jours</span>
                </div>
            </div>
        );
    }
}

export default LikeBar;