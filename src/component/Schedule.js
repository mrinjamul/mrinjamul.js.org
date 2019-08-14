import React from 'react';

function Schedule() {
    return(
        <div className="section">
        <h1><span>My Coding Schedule</span></h1>
        <table>
            <tr>
                <th>Day</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
            </tr>
            <tr>
                <td>8-8:30</td>
                <td className="selected">Learn</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>9-10</td>
                <td></td>
                <td className="selected">Practice</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>1-1:30</td>
                <td></td>
                <td></td>
                <td className="selected">Play</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>3:45-5</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="selected">Code</td>
                <td></td>
            </tr>
            <tr>
                <td>6-6:15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="selected">Discuss</td>
            </tr>
        </table>
    </div>

    );
}

export default Schedule;