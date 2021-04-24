import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import data from './data';
import ApiContext from './ApiContext';
import StudentAttendance from './StudentAttendance'

export default function Attendance(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                // 'https://present-capstone.herokuapp.com',
                'http://localhost:8000/api/students',
            );
            setStudents(result.data);
            console.log('result.data', result.data)
        };
        fetchData();
    }, []);

    const context = useContext(ApiContext);
    console.log('context', context)
    const initialCheck = {};
    const [checked, setChecked] = useState(initialCheck);
    // const [students, setStudents] = useState(context.students);
    console.log('students', students)
    const student = context.students.find(student => student.id === Number(props.match.params.id));
    console.log('props.match.params.id', props.match.params.id, 'student', student)

    context.students.forEach(student => {
        console.log('context.students', context.students, 'student', student)
        initialCheck[student.id] = student.attendance.Today
    })

    const updateStudents = (newStudent) => {
        /* insert fetch and then for db */
        const index = context.students.indexOf(newStudent)
        context.students[index] = newStudent
        context.setStudents([...context.students])
        props.history.push(`/students-history`)
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

    console.log('context.students', context.students)
    console.log('checked', checked)

    


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