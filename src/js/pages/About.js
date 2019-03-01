import React, { Component } from 'react';

import PostList from '../components/PostList'
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <div className="container post-container">
                <div className="row profile-container">
                    <img className="profile-img col" src="https://thumbs.dreamstime.com/z/illustration-cr%C3%A9ative-de-vecteur-texte-d-attente-profil-avatar-d%C3%A9faut-isolement-sur-le-fond-calibre-gris-mois-blanc-photo-107388687.jpg"/>
                    <h4 className="col">default</h4>
                </div>
                <div className="row">
                    <div className="col s12 m9">
                        <Link to="/createPost"><span>+ Ajouter un post</span></Link>
                        <PostList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;