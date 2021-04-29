import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext';
import StudentAttendance from './StudentAttendance'
import config from './config';

export default function Attendance(props) {
    const [students, setStudents] = useState([]);
    const init = {
        firstName: "",
        lastName: "",
    }
    const [formData, setFormData] = useState(init);

    const context = useContext(ApiContext);
    console.log('context', context)
    const initialCheck = {};
    const [checked, setChecked] = useState(initialCheck);
    console.log('students', students)
    const student = context.students.find(student => student.id === Number(props.match.params.id));

    context.students.forEach(student => {
        console.log('context.students', context.students, 'student', student)
        initialCheck[student.id] = student.attendance.Today
    })

    const updateStudents = e => {
        /* insert fetch and then for db */
        e.preventDefault()
        const newStudent = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            modified: new Date(),
            attendance: {
                "Today": false,
                "Yesterday": false
            }
        }
        fetch(`${config.API_ENDPOINT}/api/students`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent),
        })
            .then(res => {
                if (!res.ok)
                    return Promise.reject(res)
                return res.json()
            })
            .then(newStudent => {
                const index = context.students.indexOf(newStudent)
                context.students[index] = newStudent
                context.setStudents([...context.students, newStudent])
                props.history.push(`/students-history`)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    const handleSubmit = (e) => {
        /* insert fetch and then for db */
        e.preventDefault()
        const updatedStudents = context.students.map(student => {
            student.attendance["Today"] = checked[student.id] || false
            return student
        })
        context.setStudents(updatedStudents)
        console.log('updatedStudents', updatedStudents)
        props.history.push(`/students-history`)
    }


    return (
        <main role="main">
            <header>
                <h2>Student Attendance</h2>
            </header>
            <article className="form-section">
                {/* <label className="dream-date-label" htmlFor="date-month">Date: {data.date} </label> */}
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
                        return <StudentAttendance checked={checked[student.id]} setChecked={(isChecked) => setChecked(
                            { ...checked, [student.id]: isChecked })} student={student} updateStudents={updateStudents} />
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