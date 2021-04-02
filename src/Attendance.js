import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import App from './App';
import data from './data';
import ApiContext from './ApiContext';
// import AddPeriod from './AddPeriod'
import StudentAttendance from './StudentAttendance'

export default function Attendance(props) {
    const period = (props.match.params.period)
    const context = useContext(ApiContext)
    // console.log(context.periods)
    const filteredStudents = (!period)
        ? context.students
        : context.students.filter(student => student.class_period === parseInt(period))

    // const handleChange = (e, id) => {
    //     // setPresent(!e.target.checked)
    //     let updated = context.students.map(student => {
    //         if (student.id === id) {
    //             student.present = !student.present
    //             student.modified = new Date()
    //         }
    //         return student;
    //     })

    //     context.setStudents(updated)
    // }

    const updateStudents = (newStudent) => {
        console.log(newStudent)
        context.setStudents([...context.students, newStudent])
        props.history.push(`/attendance/${period}`)
    }



    return (
        <main role="main">
            <header>
                <h1>Attendance</h1>
                <h3>
                    Period {period}
                </h3>
            </header>

            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date: {data.modified} </label>
            </article>

            <section className="form-section dream-type-section">
                <h2>Students</h2>
                <form>
                    {/* student names Link to EditStudent */}
                    {
                        filteredStudents.map((student, index) => {
                            // const attendance = student.attendance.find(attendance => attendance.present === data.modified)
                            // console.log(student.attendance, data.modified)
                            return <StudentAttendance index={index} student={student} updateStudents={updateStudents} />
                        })
                    }
                    {/* submit the attendance to student data */}
                    <button type="submit">Submit</button>
                </form>
                <section className="button-section">
                    <Link to="/add-student"><button>Add Student </button></Link>
                </section>
            </section>
        </main>
    );
}