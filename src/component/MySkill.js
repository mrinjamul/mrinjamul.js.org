import React from 'react';

function MySkill() {
    return(
        <div className="section">
        <h1><span>My Skills</span></h1>
        <ul>
            <li>HTML <br />
                <progress min="0" max="100" value="80"></progress>
            </li>
            <li>JavaScript <br />
                <progress min="0" max="100" value="50"></progress>
            </li>
            <li>Python <br />
                <progress min="0" max="100" value="30"></progress>
            </li>
        </ul>
    </div>

    );
}

export default MySkill;