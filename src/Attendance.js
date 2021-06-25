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
    const initialCheck = {};
    const [checked, setChecked] = useState(initialCheck);
    const student = context.students.find(student => student.id === Number(props.match.params.id));
    context.students.forEach(student => {
        initialCheck[student.id] = student.attendance.Today
    })

    const updateStudents = e => {
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
        e.preventDefault()
        const updatedStudents = context.students.map(student => {
            student.attendance["Today"] = checked[student.id] || false
            return student
        })
        context.setStudents(updatedStudents)
        Promise.all(updatedStudents.map(student =>
            fetch(`${config.API_ENDPOINT}/api/students/${student.id}`, {
                mode: 'cors',
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(student),
            })
                .then(res => {
                    if (!res.ok)
                        return res.json().then(e => Promise.reject(e))
                    return res.json()
                })
                .then(updatedStudent => {
                    const studentsNotUpdated = context.students.filter(student =>
                        student.id !== updatedStudent.id
                    );
                })
                .catch(error => {
                    console.error({ error })
                })))
            .then(() => props.history.push(`/students-history`))
    }

    const sortedStudents = context.students.sort((a, b) => a.last_name < b.last_name ? -1 : 1)

    return (

        <main role="main">
            <header>
                <h2>Student Attendance<br />
                    <Link to="/add-student">
                        <button className="circle">&#43;</button>
                    </Link></h2>

            </header>
            {/* <article className="form-section">
            </article> */}
            <form className="form-box" onSubmit={handleSubmit}>
                <div className="ul-text">
                    {/* student names Link to EditStudent 
                        check attendance by clicking name
                        hover and focus
                        add class to show its selected
                        accessibility by altering setCheck w CSS to view as button*/}
                    {
                        sortedStudents.map((student) => {
                            return <StudentAttendance
                                key={student.id}
                                checked={checked[student.id]}
                                setChecked={(isChecked) => setChecked(
                                    { ...checked, [student.id]: isChecked })}
                                student={student}
                                updateStudents={updateStudents} />
                        })
                    }
                </div>
                <section className="button-section">
                    <button type="submit" className="button">Submit</button>
                    <br />
                </section>
            </form>
        </main>

    );
}