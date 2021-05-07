import React from 'react';
import { Link } from 'react-router-dom'


export default function StudentAttendance({ student, checked, setChecked }) {

    console.log('checked', checked, 'student.id', student.id)


    return (
        <div>
            <label htmlFor="attendance">
                <Link to={`/edit-student/${student.id}`}>
                    <button type='submit' className="editButton"><i class="far fa-edit"></i> </button>
                </Link>
                <span>{student.last_name}, {student.first_name}</span>
                {/* setStudents to new version of students */}
                <input className="checkbox input" onChange={(e) => setChecked(!checked)} type="checkbox" name="attendance"
                    id="attendance" checked={checked} className="attendance">
                </input>
            </label>
        </div>
    )
}