import React from 'react';

function MyPage() {
    return(
        <div className="section">
        <h1><span>My Pages</span></h1>
        <ul>
            <li>
                <a href="https://mrinjamul.github.io" >Home</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/myschedule" target="_blank" rel="noopener noreferrer" >My College Schedule</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/react-clock" target="_blank" rel="noopener noreferrer" >React Clock</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/myapp" target="_blank" rel="noopener noreferrer" >React Counter App</a>
            </li>
            <li>
                <a href="https://github.com/mrinjamul/react-currency-calculator" target="_blank" rel="noopener noreferrer" >React Currency Converter</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/react-movie-cards" target="_blank" rel="noopener noreferrer" >React Movie Cards</a>
            </li>

            {/* <!-- This Projects  are old HTML. --> */}
            <li>
                <a href="https://mrinjamul.github.io/calculator-html" target="_blank" rel="noopener noreferrer" >Calculator by HTML</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/snake-2d" target="_blank" rel="noopener noreferrer" >Snake 2D</a>
            </li>
            <li>
                <a href="https://mrinjamul.github.io/Chess-2D" target="_blank" rel="noopener noreferrer" >Chess 2D</a>
            </li>

            <li hidden>
                <a href="https://mrinjamul.github.io/" target="_blank" rel="noopener noreferrer" >New</a>
            </li>
        </ul>
    </div>
    );
}

export default MyPage;
