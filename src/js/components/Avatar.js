import React, { Component } from 'react';

class Avatar extends Component {

    render() {
        return (
            <a href="#" className="card-content avatar-container">
                <img className="avatar-container__img" src="https://thumbs.dreamstime.com/z/illustration-cr%C3%A9ative-de-vecteur-texte-d-attente-profil-avatar-d%C3%A9faut-isolement-sur-le-fond-calibre-gris-mois-blanc-photo-107388687.jpg"/>
                <span className="avatar-container__name">{this.props.user}</span>
            </a>
        );
    }
}

export default Avatar;