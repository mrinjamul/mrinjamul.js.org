import React from 'react';

function MySkill() {
    return(
        <div className="section">
        <h1><span>My Skills</span></h1>
        <ul>
            <li>C <br />
                <progress min="0" max="100" value="60"></progress>
            </li>
            <li>C Plus Plus<br />
                <progress min="0" max="100" value="60"></progress>
            </li>
            <li>Python <br />
                <progress min="0" max="100" value="30"></progress>
            </li>
            <li>HTML <br />
                <progress min="0" max="100" value="70"></progress>
            </li>
            <li>CSS <br />
                <progress min="0" max="100" value="50"></progress>
            </li>
            <li>JavaScript <br />
                <progress min="0" max="100" value="50"></progress>
            </li>
            <li>Reactjs <br />
                <progress min="0" max="100" value="40"></progress>
            </li>
            <li>Shell scripting <br />
                <progress min="0" max="100" value="60"></progress>
            </li>
            <li>Git VCS <br />
                <progress min="0" max="100" value="80"></progress>
            </li>
        </ul>
    </div>

    );
}

export default MySkill;