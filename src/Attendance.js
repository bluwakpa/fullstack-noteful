import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import ApiContext from './ApiContext';
import StudentAttendance from './StudentAttendance'

export default function Attendance(props) {
    const context = useContext(ApiContext)
    const [checked, setChecked] = useState({});
    // props or context.students set object key to student name and value if present Today, student.id set to true 1:true, 2:false

    const updateStudents = (newStudent) => {
        const index = context.students.indexOf(newStudent)
        context.students[index] = newStudent
        context.setStudents([...context.students])
        props.history.push(`/students-history`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedStudents = context.students.map(student => {
            student.attendance["Today"] = checked[student.id] || false
            console.log('updatedStudents', updatedStudents)
            return student
        })
        context.setStudents(updatedStudents)
        props.history.push(`/students-history`)
    }

    console.log('context.students', context.students)

    return (
        <main role="main">
            <header>
                <h2>Student Attendance</h2>
            </header>
            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date: {data.date} </label>
            </article>
            <form onSubmit={handleSubmit}>
                {/* student names Link to EditStudent 
                    check attendance by clicking name
                    hover and focus
                    add class to show its selected
                    add pencil to left of name to edit student
                    accessibility by altering setCheck w CSS to view as button*/}
                {
                    context.students.map((student) => {
                        return <StudentAttendance checked={checked[student.id]} setChecked={(isChecked) => setChecked({ ...checked, [student.id]: isChecked })} student={student} updateStudents={updateStudents} />
                    })
                }
                {/* submit the attendance to student data */}

                <section className="button-section">
                    <button type="submit">Submit</button>
                    <br />
                    <Link to="/add-student"><button>+ Student </button></Link>
                </section>
            </form>
        </main>
    );
}