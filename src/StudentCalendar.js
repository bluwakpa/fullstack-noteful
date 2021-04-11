import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays, addDays } from 'date-fns';
import ApiContext from './ApiContext';
import 'react-calendar/dist/Calendar.css';

export default function StudentCalendar({ match }) {
    const [value, onChange] = useState(new Date());
    const context = useContext(ApiContext);
    const student = context.students.find(student => student.id === match.params.id);

    console.log(student)

    const updateStudents = (newStudent) => {
        context.setStudents([...context.students, newStudent])
    }

    function isSameDay(student, match) {
        return differenceInCalendarDays(student, match) === 0;
    }

    function tileClassPresent({ date, view }) {
        let today = new Date()
        if (view === 'month') {
            if (differenceInCalendarDays(today, date) === 0) {
                console.log('check', date)
                return 'myClassPresent';
            }
        }
    }

    return (
        <main role="main">
            <header role="banner">
                <h2>Student Calendar</h2>
                <h3>
                    {student.first_name} {student.last_name} <br />
                    {/* List Group Bootstrap */}
                </h3>

                <div>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        tileClassName={tileClassPresent}
                    />

                </div>
                {/* <div>
                    <li> {student.first_name} </li>
                    <li> {student.last_name} </li>
                    <li> {student.attendance} </li>
                </div> */}
            </header>
        </main>
    );
}