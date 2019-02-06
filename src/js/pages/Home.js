import React, { Component } from 'react'

import Post from '../components/Post'
import PersonList from '../components/PersonList'

const posts = [
    {
        user: {
            name: 'julescournut',
            avatar: 'https://yt3.ggpht.com/a-/ACSszfFWiPdKHdLmbneZ_93sWme_rWi7Y1gx8zwjEg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        nbLike: 543,
        date: 2,
        imgURL: 'http://www.monhamster.net/wp-content/uploads/2017/01/Guide-complet-du-hamster-1.jpg',
        comments: [
            {
                user: {
                    name: 'julescournut',
                    avatar: 'https://yt3.ggpht.com/a-/ACSszfFWiPdKHdLmbneZ_93sWme_rWi7Y1gx8zwjEg=s900-mo-c-c0xffffffff-rj-k-no'
                },
                content: 'Voici mon hamster Paul'
            },
            {
                user: {
                    name: 'jcneboit',
                    avatar: 'https://yt3.ggpht.com/a-/ACSszfFWiPdKHdLmbneZ_93sWme_rWi7Y1gx8zwjEg=s900-mo-c-c0xffffffff-rj-k-no'
                },
                content: 'je suis un sac à prout'
            }
        ]
    },
    {
        user: {
            name: 'julescournut',
            avatar: 'https://yt3.ggpht.com/a-/ACSszfFWiPdKHdLmbneZ_93sWme_rWi7Y1gx8zwjEg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        nbLike: 356,
        date: 4,
        imgURL: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop',
        comments: [

        ]
    },
    {
        user: {
            name: 'julescournut',
            avatar: 'https://yt3.ggpht.com/a-/ACSszfFWiPdKHdLmbneZ_93sWme_rWi7Y1gx8zwjEg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        nbLike: 893,
        date: 5,
        imgURL: 'https://blog.spoongraphics.co.uk/wp-content/uploads/2011/landscape/01.jpg',
        comments: [

        ]
    }
]

class Home extends Component {

    render() {
        return (
            <div className="container post-container">
                <div className="row">
                    <PersonList/>
                    <div className="col s12 m9">

                        {posts.map((post) => <Post imgURL={post.imgURL}
                                                   nbLike={post.nbLike}
                                                   date={post.date}
                                                   user={post.user}
                                                   comments={post.comments} />)}

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;