import React, { useContext, useState } from 'react';
import { Route, Link } from 'react-router-dom';
// import App from './App';
// import data from './data'
import ApiContext from './ApiContext';
// import AddPeriod from './AddPeriod'
import StudentAttendance from './StudentAttendance'

export default function Attendance(props) {
    const period = (props.match.params.period)
    const context = useContext(ApiContext)
    // const student = context.students.find(student => student.id === props.match.params.id);
    // const [present, setPresent] = useState(student.present)

    // console.log(context.students)
    const filteredStudents = (!period)
        ? context.students
        : context.students.filter(student => student.class_period === parseInt(period))

    const handleChange = (e, id) => {
        // setPresent(!e.target.checked)
        let updated = context.students.map(student => {
            if(student.id === id){
                student.present = !student.present
                student.modified = new Date()
            }
            return student;
        })
        
        // let removed = context.students.filter(student => student.id !== id)
        context.setStudents(updated)
    }

    const updateStudents = (newStudent) => {
        context.setStudents([...context.students, newStudent])
        props.history.push(`/attendance/${period}`)
    }

    return (
        <main role="main">
            <header>

                <h1>Attendance</h1>
            </header>

            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date</label>
                {/* <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> .
                <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required="" /> .
                <input type="number" name="date-year" className="date-year" placeholder="2021" min="2021" max="2031" required="" /> */}
            </article>

            <section className="form-section dream-type-section">
                <h2>Students</h2>

                {
                    filteredStudents.forEach(student => (
                        <label htmlFor="dream-type-normal">
                            <h3>Period {student.class_period}</h3>
                        </label>
                    ))
                }

                <form>
                    {/* student names Link to EditStudent */}
                    {/* state, value that uses that state, setState function to change state or onChange etc inside of parent comp */}
                    {
                        filteredStudents.map((student, index) => (
                            <StudentAttendance student={student} updateStudents={updateStudents} />
                        ))
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