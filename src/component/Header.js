import React from 'react';

import Avatar from './Uploads/icons/0.jpg';

function Header() {
    return(
        <div id="header" className="section">
            <img alt="" id="non-selectable" className="img-circle" src={Avatar} />
            <p>Injamul Mohammad Mollah</p>
        </div>
    );
}

export default Header;