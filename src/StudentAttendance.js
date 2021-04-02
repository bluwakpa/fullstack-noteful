import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'


export default function StudentAttendance({ student, index, updateStudents }) {
    // const [attendance, setAttendance] = useState({attendance: false, date: new Date()});
    const [present, setPresent] = useState(student.present);
    const [value, onChange] = useState(new Date());
    const context = useContext(ApiContext)
    
    const init = {
        firstName: "",
        lastName: "",
        period: ""
    }

    const [formData, setFormData] = useState(init)
    const {setStudents, students} = useContext(ApiContext)

    let attendance = []

    const handleChange = (e) => {
        setPresent(e.target.value)
        attendance.push({
            id: student.id,
            modified: new Date(),
            present: true
        })
        const newStudent = {...student, present: true}
        const studentsCopy = [...students]
        studentsCopy[index] = newStudent
        console.log("studentsCopy", studentsCopy)
        //new student variable in place of old student index
        setStudents(studentsCopy)
        // console.log('StudentAttendance', newStudent)
    }

    // const onSubmit = (e) => {
    //     {/* insert fetch and .then for db */ }
    //     e.preventDefault()
    //     const newStudent = {
    //         first_name: formData.firstName,
    //         last_name: formData.lastName,
    //         id: uuidv4(),
    //         class_period: parseInt(formData.period),
    //         date: new Date(),
    //         present: false
    //     }
    //     updateStudents(newStudent)
    // }

    return (
        <div>
            <label htmlFor="present">
                <Link to={`/edit-student/${student.id}`}>
                    <button type='submit'>
                        <span>{student.last_name}, {student.first_name}</span>
                    </button>
                </Link>
                <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={present} className="present"></input>
                {/* <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={attendance.attendance} className="present"></input> */}
            </label>
        </div>
    )
}