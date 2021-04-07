import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import App from './App';
import data from './data';
import ApiContext from './ApiContext';
// import AddPeriod from './AddPeriod'
import StudentAttendance from './StudentAttendance'

export default function Attendance(props) {
    const period = (props.match.params.period)
    const context = useContext(ApiContext)
    const [checked, setChecked] = useState({});
    const [student, setStudent] = useState(data.students)
    // console.log(context.periods)
    // const filteredStudents = (!period)
    //     ? context.students
    //     : context.students.filter(student => student.class_period === parseInt(period))

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
        console.log(context.students.indexOf(newStudent))
        const index = context.students.indexOf(newStudent)
        context.students[index] = newStudent
        context.setStudents([...context.students])
        // props.history.push(`/attendance/${period}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedStudents = context.students.map(student => {
            console.log(student)
            student.attendance["2021-01-03"] = checked[student.id]
        })
        context.setStudents(updatedStudents)
    }


    return (
        <main role="main">
            <header>
                <h1>Attendance</h1>
                {/* <h3>
                    Period {period}
                </h3> */}
            </header>

            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date: {data.modified} </label>
            </article>

            <section className="form-section dream-type-section">
                <h2>Students</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                return (
                    <StudentAttendance checked={checked[student.id]} setChecked={(isChecked) => setChecked({ ...checked, [student.id]: isChecked })} student={student} updateStudents={updateStudents} />
                )
                </div>  
                    {/* student names Link to EditStudent */}
                    {
                        // filteredStudents.map((student) => {
                            // const attendance = student.attendance.find(attendance => attendance.present === data.modified)
                            // console.log(student.attendance, data.modified)
                            // })
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