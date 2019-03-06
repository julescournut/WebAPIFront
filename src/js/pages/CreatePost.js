/**
 * Created by jules on 01/03/19.
 */

import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';

const AddPostForm = ({ image, description, addPost, handleChange, fileChangedHandler}) => (
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
            required="required"
            className="import-file-button"
            type="file"
            onChange={fileChangedHandler}
        />
        <input
            required="required"
            type="text"
            placeholder="La description de l'image"
            value={description}
            onChange={handleChange("description")}
        />
        <button className="btn waves-effect waves-light margin-button" type="submit">Ajouter</button>
    </form>
);

class CreatePost extends Component {

    state = {
        image: null,
        description: "",
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    fileChangedHandler = event => {
        this.setState({ image: event.target.files[0] })
    };

    addpost = async (image, description) => {
        try {
            const access_token = localStorage.getItem("token");
            let bodyFormData = new FormData();
            bodyFormData.append("image", image);
            axios.post(
                this.props.apiUrl +"upload/image",
                bodyFormData
            ).then((response) => {
                axios.post(
                    this.props.apiUrl +"posts",
                    {
                        "image": response.data.filename,
                        "description": description,
                    },
                    {
                        headers: {
                            Authorization: `${access_token}`,
                            "Content-Type": "application/json"
                        }
                    }
                ).then(() => {
                    this.props.history.push("/");
                }).catch((error) => {
                    if (error.response) {
                        this.setState(state => ({
                            msg: error.response.data.message
                        }));
                    }
                })
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
                    <div className="add-post-title">
                        <h4>Créer un post</h4>
                    </div>
                    <AddPostForm
                        handleChange={this.handleChange}
                        fileChangedHandler={this.fileChangedHandler}
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