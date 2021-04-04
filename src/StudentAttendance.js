import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'


export default function StudentAttendance({ student, index, updateStudents }) {
    const [present, setPresent] = useState(student.present);
    const [value, onChange] = useState(new Date());
    const context = useContext(ApiContext)
    const {setStudents, students} = context

    const handleChange = (e) => {
        setPresent(e.target.checked)
        students[index].present = e.target.checked
        setStudents(students)
    }

    return (
        <div>
            <label htmlFor="present">
                <Link to={`/edit-student/${student.id}`}>
                    <button type='submit'>
                        <span>{student.last_name}, {student.first_name}</span>
                    </button>
                </Link>
                <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={present} className="present"></input>
            </label>
        </div>
    )
}