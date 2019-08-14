import React, {Component} from 'react';

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
                <h1>Hello World!</h1>
                <div class="copyright">
                &copy; 2017 My Injamul Mohammad Mollah. All rights reserved.
                </div>

            </div>
        );
    }
}


export default Blog