import React, { Component } from 'react';

class Avatar extends Component {

    render() {
        return (
            <span className="card-content avatar-container">
                <img alt="not found" className="avatar-container__img" src="https://thumbs.dreamstime.com/z/illustration-cr%C3%A9ative-de-vecteur-texte-d-attente-profil-avatar-d%C3%A9faut-isolement-sur-le-fond-calibre-gris-mois-blanc-photo-107388687.jpg"/>
                <span className="avatar-container__name">{this.props.user}</span>
            </span>
        );
    }
}

export default Avatar;