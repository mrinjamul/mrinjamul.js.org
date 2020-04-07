import React from 'react';

function Message(props) {
    return(
        <div className="section">
            <hr/>
            <div className="index">
                <h3>Index no.: {props.index}</h3>
            </div>
            <h3 >Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Message: {props.message}</h3>
            <br />
            <hr/>

        </div>
    );
}

export default Message;