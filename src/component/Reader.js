import React, {Component} from 'react';
import Message from './Message';

class Reader extends Component {
    constructor() {
        super()
        this.state = {
            "name": "Injamul",
            "email": "mrinjamul@gmail.com",
            "message": "Hi"
        }
    }

    
    render() {
        return(
            <div>
                <Message data={this.state} />

            </div>
        );
    }
}

export default Reader;