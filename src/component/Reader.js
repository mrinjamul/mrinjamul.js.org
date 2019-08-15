import React, {Component} from 'react';
import Message from './Message';

class Reader extends Component() {
    constructor() {
        super()
        this.state = {
            "name": "",
            "email": "",
            "message": ""
        }
    }
    
    render() {
        return(
            <div>
                <Message />
            </div>
        );
    }
}

export default Reader;