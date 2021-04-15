import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'


export default function StudentAttendance({ student, updatedStudents, checked, setChecked }) {
    const [attendance, setAttendance] = useState(student.attendance);
    // const [value, onChange] = useState(new Date());

    const context = useContext(ApiContext)
    // const { students, setStudents } = context

    // const handleChange = (e) => {
    //     // setAttendance(e.target.checked)
    //     student.attendance = e.target.checked
    //     console.log(student)
    //     // setStudents(students)
    //     updateStudents(student)
    // }

    console.log('student.attendance.Today', student.attendance.Today)
    // console.log('updatedStudents', updatedStudents)
    console.log(checked, student.id)
    return (
        <div>
            <label htmlFor="attendance">
                <Link to={`/edit-student/${student.id}`}>
                    <button type='submit'> E </button>
                </Link>
                <span>{student.last_name}, {student.first_name}</span>
                {/* setStudents to new version of students */}
                <input onChange={(e) => setChecked(!checked)} type="checkbox" name="attendance" id="attendance" checked={checked} className="attendance"></input>
                {/* value={checked[student.id]} */}
            </label>
            <div>
            {Object.entries(student.attendance).map(([date, present]) => (
                                <div>
                                    <p>{date}: {present ? "Present" : "Absent"}</p>
                                </div>
                            ))}
            </div>
        </div>
    )
}