import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext'
import StudentAttendance from './StudentAttendance'
import Attendance from './Attendance'
import data from './data';
import 'react-calendar/dist/Calendar.css';

export default function StudentCalendar({ match }) {
    const student = data.students.find(student => student.id === match.params.id)
    const [value, onChange] = useState(new Date());
    const [present, setPresent] = useState(student.present)
    const [attendance, setAttendance] = useState(data.attendance)
    // console.log(student)
    console.log(student)
    // console.log(match.params.id)

    return (
        <main role="main">
            <header role="banner">
                <h2>Student Calendar</h2>
                <h3>
                    {student.first_name} {student.last_name} <br />
                    Period {student.class_period}
                </h3>

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