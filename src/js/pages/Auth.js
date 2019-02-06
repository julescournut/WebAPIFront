import React, { Component } from 'react';
import axios from "axios";

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
            marginTop: "20px"
        }}
    >
        <input
            type="text"
            placeholder="login"
            value={login}
            onChange={handleChange("login")}
        />
        <input
            type="password"
            placeholder="password"
            value={mdp}
            onChange={handleChange("mdp")}
        />
        <button type="submit">Login</button>
    </form>
);

class About extends Component {

    state = {
        login: "",
        mdp: "",
        posts: []
    };

    login = async (email, password) => {

        try {
            let res = await axios.post(this.props.apiURL+"login", {
                "email": email,
                "password": password
            });
            localStorage.setItem("token", res.data.token);
        } catch (err) {
            console.error(err);
        }
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };


    render() {
        return (
            <div className="container" >
                <div className="container login-container">
                    <LoginForm
                        handleChange={this.handleChange}
                        onLogin={this.login}
                        login={this.state.login}
                        mdp={this.state.mdp}
                    />
                </div>
            </div>
        );
    }
}

export default About;