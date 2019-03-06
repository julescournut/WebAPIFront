import React, { Component } from 'react';
import axios from "axios";

class Avatar extends Component {

    state = {};

    getImage = async () => {
        try {
            if (this.props.avatar) {
                const access_token = localStorage.getItem("token");
                const options = {
                    method: "get",
                    url: this.props.apiUrl + "download/image/" + this.props.avatar,
                    headers: {
                        Authorization: `${access_token}`,
                        "Content-Type": "application/json"
                    }
                };
                let res = await axios(options);
                this.setState({ image: res.data });
            } else {
                this.setState({image: "https://www.gomuscu.org/public/uploads/avatars/default.jpg"})
            }
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getImage();
    }


    render() {
        return (
            <span className="card-content avatar-container">
                <img alt="not found" className="avatar-container__img" src={this.state.image}/>
                <span className="avatar-container__name">{this.props.user}</span>
            </span>
        );
    }
}

export default Avatar;