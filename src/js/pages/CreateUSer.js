/**
 * Created by jules on 21/02/19.
 */

import React, { Component } from 'react';
import axios from "axios";
import { withRouter, Link } from 'react-router-dom';

const SigninForm = ({ name, pseudo, email, mdp, onSignin, handleChange }) => (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            onSignin(name, pseudo, email, mdp);
        }}
        style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "80vw",
            margin: "auto",
            marginTop: "20px"
        }}
    >
        <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={handleChange("name")}
        />
        <input
            type="text"
            placeholder="Votre pseudo"
            value={pseudo}
            onChange={handleChange("pseudo")}
        />
        <input
            type="text"
            placeholder="Votre email"
            value={email}
            onChange={handleChange("email")}
        />
        <input
            type="password"
            placeholder="Votre mot de passe"
            value={mdp}
            onChange={handleChange("mdp")}
        />
        <button className="btn waves-effect waves-light auth-button margin-button" type="submit">S'inscrire</button>
    </form>
);

class CreateUSer extends Component {

    state = {
        name: "",
        pseudo: "",
        email: "",
        mdp: "",
        posts: [],
        msg: ''
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    signin = async (name, pseudo, email, password) => {
        try {

            axios.post(this.props.apiURL+"users", {
                "name": name,
                "pseudo": pseudo,
                "email": email,
                "password": password
            }).then((response) => {
                console.log(response.data);
                this.props.history.push("/auth");
            }).catch((error) => {
                if (error.response) {
                    this.setState(state => ({
                        msg: error.response.data.message
                    }));
                }
            });
        } catch(error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className="container" >
                <div className="container login-container">
                    <div className="auth-title">
                        <h3>Instagramzz</h3>
                    </div>
                    <SigninForm
                        handleChange={this.handleChange}
                        onSignin={this.signin}
                        name={this.state.name}
                        pseudo={this.state.pseudo}
                        email={this.state.email}
                        mdp={this.state.mdp}
                    />
                    <div className="error-label">{this.state.msg}</div>
                </div>
                <div className="create-account-button">
                    <span>Vous avez déjà un compte ? <Link to="/auth">Connectez vous </Link></span>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateUSer);