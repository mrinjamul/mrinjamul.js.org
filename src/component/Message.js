import React from 'react';

function Message(props) {
    return(
        <div>
            <h3 >Name: {props.data.name}</h3>
            <h3>Email: {props.data.email}</h3>
            <h3>Message: {props.data.message}</h3>
            <hr/>

        </div>
    );
}

export default Message;