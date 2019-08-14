import React from 'react';

function Form() {
    return(
        <div className="section">
        <h1><span>Contact Me</span></h1>
        
        <svg className="face" height="100" width="100">
            <circle cx="50" cy="50" r="50" fill="#FDD835"/>
            <circle cx="30" cy="30" r="10" fill="#FFFFFF"/>
            <circle cx="70" cy="30" r="10" fill="#FFFFFF"/>
            <circle cx="30" cy="30" r="5" fill="#000000"/>
            <circle cx="70" cy="30" r="5" fill="#000000"/>
            <path d="M 30 70 q 20 20 40 0" stroke="#FFFFFF" stroke-width="5" fill="none" />
        </svg>
             
        <form>
            <input name="name" placeholder="Name" type="text" required /><br/>
            <input name="email" placeholder="Email" type="email" required /><br/>
            <textarea name="message" placeholder="Message" required ></textarea>
            <input type="submit" value="SEND" className="submit" />
        </form>
    </div>

    );
}

export default Form;