import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom';

export default function StudentAttendance({ student, updateStudents }) {
    const [present, setPresent] = useState(student.present);
    const [value, onChange] = useState(new Date());

    const init = {
        firstName: "",
        lastName: "",
        period: ""
    }

    const [formData, setFormData] = useState(init)
    const context = useContext(ApiContext)

    let attendance = []

    const handleChange = (e) => {
        setPresent(e.target.value)
        attendance.push({
            id: student.id,
            modified: new Date(),
            present: true
        })
        console.log('attendance', attendance)
    }

    const onSubmit = (e) => {
        {/* insert fetch and .then for db */ }
        e.preventDefault()
        const newStudent = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            id: uuidv4(),
            class_period: parseInt(formData.period),
            date: new Date(),
            present: false
        }
        updateStudents(newStudent)
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