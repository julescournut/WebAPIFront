import React, { Component } from 'react';

import Avatar from '../components/Avatar'
import Comment from '../components/Comment'
// import InputComment from '../components/InputComment'
// import LikeBar from '../components/LikeBar'
import axios from "axios";

class Post extends Component {

    state = {};

    getImage = async () => {
        try {
            const access_token = localStorage.getItem("token");
            const options = {
                method: "get",
                url: this.props.apiUrl + "download/image/" + this.props.image,
                headers: {
                    Authorization: `${access_token}`,
                    "Content-Type": "application/json"
                }
            };
            let res = await axios(options);
            this.setState({ image: res.data });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getImage();
    }

    render() {
        let d = new Date(this.props.date);
        return (
            <div className="card">
                <Avatar apiUrl={this.props.apiUrl} user={this.props.user} avatar={this.props.avatar} />
                <div className="card-image post-img">
                    <img src={this.state.image} alt="not found" />
                </div>
                <div className="card-content comment-container">
                    {/*<LikeBar/>*/}
                    <span className="post-date">{d.toLocaleDateString()}</span>
                    <Comment user={this.props.user} content={this.props.description} />
                    {/*<InputComment/>*/}
                </div>
            </div>
        );
    }
}

export default Post;