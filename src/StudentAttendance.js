import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


export default function StudentAttendance({ student, checked, setChecked }) {

    return (

            <div>
                <label htmlFor={student.id}>
                    <input className="checkbox" onChange={(e) => setChecked(!checked)} type="checkbox" name="attendance"
                        id={student.id} checked={checked} >
                    </input>
                    <span>{student.last_name}, {student.first_name}</span>
                    <Link to={`/edit-student/${student.id}`}>
                        <button type='submit' className="editButton"><i className="far fa-edit"></i> </button>
                    </Link>
                </label>
            </div>
   
    )
}