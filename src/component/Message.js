import React from 'react';

function Message(props) {
    return(
        <div>
            <h3 >Name: {this.state.name}</h3>
            <h3>Email: {this.state.email}</h3>
            <h3>Message: {this.state.message}</h3>
            <hr/>

        </div>
    );
}

export default Message;