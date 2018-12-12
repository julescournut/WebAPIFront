import React, { Component } from 'react';

class Avatar extends Component {

    render() {
        return (
            <a href="#" className="card-content avatar-container">
                <img className="avatar-container__img" src={this.props.user.avatar}/>
                <span className="avatar-container__name">{this.props.user.name}</span>
            </a>
        );
    }
}

export default Avatar;