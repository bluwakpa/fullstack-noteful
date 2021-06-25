import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


export default function StudentAttendance({ student, checked, setChecked }) {


    return (
        <div className="parent-container" htmlFor={student.id}>
            <input className="checkbox" onChange={(e) => setChecked(!checked)} type="checkbox" name="attendance"
                id={student.id} checked={checked} value={checked}>
            </input>
            <span>{student.last_name}, {student.first_name}</span>
            <Link to={`/edit-student/${student.id}`}>
                <button type='submit' className="editButton"><i class="fas fa-pen-square"></i> </button>
            </Link>
            {/* <label htmlFor={student.id}>
            
                </label> */}
        </div>

    )
}