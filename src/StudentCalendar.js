import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays, addDays } from 'date-fns';
import data from './data';
import ApiContext from './ApiContext';
import 'react-calendar/dist/Calendar.css';

export default function StudentCalendar({ match }) {
    const [value, onChange] = useState(new Date());
    const context = useContext(ApiContext);
    const student = context.students.find(student => student.id === match.params.id);
    // const datesToAddClassTo = [yesterday];

    console.log(student)

    const updateStudents = (newStudent) => {
        context.setStudents([...context.students, newStudent])
        // props.history.push(`/attendance/${period}`)
    }

    function isSameDay(student, match) {
        return differenceInCalendarDays(student, match) === 0;
    }

    function tileClassPresent({ date, view }) {
        let today = new Date()
        // let yesterday = addDays(today, -2)
        // console.log(yesterday, date)
        // Add class to tiles in month view only
        if (view === 'month') {
          // Check if a date React-Calendar wants to check is on the list of dates to add class to
          // add an if else statement
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
                    Period {student.class_period}
                </h3>

                <div>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        tileClassName={tileClassPresent}
                    />
                </div>
            </header>
        </main>
    );
}