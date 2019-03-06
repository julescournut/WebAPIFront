/**
 * Created by jules on 09/01/19.
 */

import axios from "axios";
import Post from '../components/Post'
import React, {Component} from 'react';

export default class PostList extends Component {

    state = {};

    getPosts = async () => {
        try {
            const access_token = localStorage.getItem("token");
            const options = {
                method: "get",
                headers: {
                    Authorization: `${access_token}`,
                    "Content-Type": "application/json"
                }
            };
            if (this.props.isProfile) {
                options.url = this.props.apiUrl + "posts/user"
            } else {
                options.url = this.props.apiUrl + "posts"
            }
            let res = await axios(options);
            this.setState({ posts: res.data.posts });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    render() {
        if (this.state.posts) {
            return (
                <ul>
                    {
                        this.state.posts.map(
                            (post, i) =>
                            <Post key={i}
                                  apiUrl= {this.props.apiUrl}
                                  user={(post.author.ref!=null) ? post.author.ref.pseudo : "default"}
                                  date={post.date}
                                  description={post.description}
                                  image={post.image}
                            />
                    )}
                </ul>
            )
        } else {
            return (
                <ul> Chargement...
                </ul>
            )
        }
    }
}