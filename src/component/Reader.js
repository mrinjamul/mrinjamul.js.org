import React from 'react';
import Message from './Message';
import messageData from './messageData';

function Reader(props) {
    const messageCompo = messageData.map(m => <Message key={m.id} name={m.name} email={m.email} message={m.message} />);
    return(
        <div>
            {messageCompo}
        </div>
    );
}

export default Reader;