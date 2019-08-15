import React from 'react';

import icon_github from './Uploads/icons/github.png';
import icon_sololearn from './Uploads/icons/sololearn.png';
import icon_linkedin from './Uploads/icons/linkedin.png';
import icon_facebook from './Uploads/icons/facebook.png';
import icon_twitter from './Uploads/icons/twitter.png';


function Contact() {
    return(
        <div className="section" id="contacts">
        <h1><span>Follow Me</span></h1>
        <div>
        <a href="https://github.com/mrinjamul/" >
                <img alt="Github" src={icon_github} />
            </a>
            <a href="https://www.sololearn.com/Profile/6368073/" >
                <img alt="SoloLearn" src={icon_sololearn} />
            </a>
            <a href="https://www.linkedin.com/in/injamul-mohammad-mollah-596672183/" >
                <img alt="LinkedIn" src={icon_linkedin} />
            </a>
            <a href="https://www.facebook.com/injamulmohammadmollah4652">
                <img alt="Facebook" src={icon_facebook} />
            </a>
            <a href="https://twitter.com/mrinjamul">
                <img alt="Twitter" src={icon_twitter} />
            </a>
        </div>
    </div>

    );
}

export default Contact;