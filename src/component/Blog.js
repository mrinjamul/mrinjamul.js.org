import React, {Component} from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Schedule from './Schedule';
import MySkill from './MySkill';
import Media from './Media';
import Form from './Form';
import Contact from './Contact';

import './Blog.css';

class Blog extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Header />
                <AboutMe />
                <Schedule />
                <MySkill />
                <Media />
                <Form />
                <Contact />
                <div class="copyright">
                &copy; 2017 My Injamul Mohammad Mollah. All rights reserved.
                </div>

            </div>
        );
    }
}


export default Blog;