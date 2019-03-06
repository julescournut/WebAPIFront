import React, { Component } from 'react';

import PostList from '../components/PostList'
import { Link } from 'react-router-dom';
import axios from "axios";

class About extends Component {

    state = {};

    getUser = async () => {
        try {
            const access_token = localStorage.getItem("token");
            const options = {
                method: "get",
                headers: {
                    Authorization: `${access_token}`,
                    "Content-Type": "application/json"
                },
                url: this.props.apiUrl + "users/current"
            };
            let res = await axios(options);
            this.setState({ user: res.data.user });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        let name = "";
        if (this.state.user) {
            name = this.state.user.pseudo;
        }
        return (
            <div className="container post-container">
                <div className="row profile-container">
                    <img alt="not found" className="profile-img col" src="https://thumbs.dreamstime.com/z/illustration-cr%C3%A9ative-de-vecteur-texte-d-attente-profil-avatar-d%C3%A9faut-isolement-sur-le-fond-calibre-gris-mois-blanc-photo-107388687.jpg"/>
                    <h4 className="col">{name}</h4>
                </div>
                <div className="row">
                    <div className="col s12 m9">
                        <Link className="btn waves-effect waves-ligh add-post-btn" to="/createPost">+ Ajouter un post</Link>
                        <PostList apiUrl={this.props.apiUrl} isProfile={true}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;