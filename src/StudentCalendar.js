import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext'

export default function StudentCalendar() {
    // const context = useContext(ApiContext);
    // const init = {
    //     firstName: "",
    //     lastName: "",
    //     period: "",
    //     modified: "",
    //     present: ""
    // }
    const [value, onChange] = useState(new Date());

    return (
        <main role="main">
            <header role="banner">
                <h2>Student Calendar</h2>
                <div>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </header>
        </main>
    );
}