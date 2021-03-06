import React, { Component } from 'react';
import axios from "axios";
import { withRouter, Link } from 'react-router-dom';

const LoginForm = ({ login, mdp, onLogin, handleChange }) => (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            onLogin(login, mdp);
        }}
        style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "80vw",
            margin: "auto",
            marginTop: "20px",

        }}
    >
        <input
            type="text"
            placeholder="E-mail"
            value={login}
            onChange={handleChange("login")}
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={mdp}
            onChange={handleChange("mdp")}
        />
        <button className="btn margin-button waves-effect waves-light" type="submit">Se connecter</button>
    </form>
);

class Auth extends Component {

    state = {
        login: "",
        mdp: "",
        posts: [],
        msg: ''
    };


    login = async (email, password) => {
        try {

            axios.post(this.props.apiUrl+"login", {
                "email": email,
                "password": password
            }).then((response) => {
                localStorage.setItem("token", response.data.token);
                this.props.history.push("/");
                window.location.reload();
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

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };


    render() {
        return (
            <div className="container" >
                <div className="container login-container">
                    <div className="auth-title">
                        <h3>Instagramzz</h3>
                    </div>
                    <LoginForm
                        handleChange={this.handleChange}
                        onLogin={this.login}
                        login={this.state.login}
                        mdp={this.state.mdp}
                    />
                    <div className="error-label">{this.state.msg}</div>
                </div>

                <div className="create-account-button">
                    <span>Pas encore de compte ? <Link to="/createUser">Inscrivez vous </Link></span>
                </div>
            </div>
        );
    }
}

export default withRouter(Auth);