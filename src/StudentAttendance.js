import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'


export default function StudentAttendance({ student, updateStudents, checked, setChecked }) {
    const [attendance, setAttendance] = useState(student.attendance);
    const [value, onChange] = useState(new Date());
    
    const context = useContext(ApiContext)
    const {setStudents, students} = context

    const handleChange = (e) => {
        // setAttendance(e.target.checked)
        student.attendance = e.target.checked
        console.log(student)
        // setStudents(students)
        updateStudents(student)
    }

    return (
        <div>
            <label htmlFor="attendance">
                {/* <Link to={`/edit-student/${student.id}`}> */}
                    {/* <button type='submit'> */}
                        <span>{student.last_name}, {student.first_name}</span>
                    {/* </button> */}
                {/* </Link> */}
                <input onChange={(e) => setChecked(!checked)} type="checkbox" name="attendance" id="attendance" value={checked} className="attendance"></input>
            </label>
        </div>
    )
}