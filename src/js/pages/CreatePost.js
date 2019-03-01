/**
 * Created by jules on 01/03/19.
 */

import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';

const AddPostForm = ({ image, description, addPost, handleChange }) => (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            addPost(image, description);
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
            placeholder="Lien vers l'image"
            value={image}
            onChange={handleChange("image")}
        />
        <input
            type="text"
            placeholder="La description de l'image"
            value={description}
            onChange={handleChange("description")}
        />
        <button className="btn waves-effect waves-light" type="submit">Ajouter</button>
    </form>
);

class CreatePost extends Component {

    state = {
        image: "",
        description: "",
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    addpost = async (image, description) => {
        try {
            const access_token = localStorage.getItem("token");
            axios.post(
                this.props.apiURL+"posts",
                {
                    "image": image,
                    "description": description,
                    "author": {
                        "name": "default",
                        "ref": null
                    }
                },
                {
                    headers: {
                        Authorization: `${access_token}`,
                        "Content-Type": "application/json"
                    }
                }
            ).then((response) => {
                console.log(response.data);
                this.props.history.push("/");
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
                <h1>Ajouter un post</h1>
                <div className="container login-container">
                    <AddPostForm
                        handleChange={this.handleChange}
                        addPost={this.addpost}
                        image={this.state.image}
                        description={this.state.description}
                    />
                    <div className="error-label">{this.state.msg}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreatePost);