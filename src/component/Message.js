import React from 'react';

function Message(props) {
    return(
        <div className="section">
            <hr/>
            <h3 >Name: {props.name}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Message: {props.message}</h3>
            <div className="copyright">
                <h3>Index no.: {props.index}</h3>
            </div>
            <hr/>

        </div>
    );
}

export default Message;