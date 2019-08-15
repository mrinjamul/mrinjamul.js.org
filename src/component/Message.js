import React from 'react';

function Message(props) {
    return(
        <div>
            <h3 >Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Message: {props.message}</h3>
            <hr/>

        </div>
    );
}

export default Message;