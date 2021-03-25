import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom';

export default function StudentAttendance({ student, updateStudents }) {
    const [present, setPresent] = useState(student.present)
    // const [periods, setPeriods] = useState(data.periods)
    // const [students, setStudents] = useState(data.students)
    // const [firstName, setFirstName] = useState(student.first_name)
    // const [lastName, setLastName] = useState(student.last_name)
    // const [classPeriod, setClassPeriod] = useState(student.class_period)
    const [value, onChange] = useState(new Date());

    const init = {
        firstName: "",
        lastName: "",
        period: ""
    }

    let attendance = []
    
    // set attendance to a global state
    // context grab attendance

    const [formData, setFormData] = useState(init)
    const handleChange = (e) => {
        setPresent(e.target.value)
        attendance.push({
            id: student.id,
            modified: new Date(),
            present: true
        })
        console.log('attendance', attendance)
    }

    // Jonathan:
    // I think you could make attendance into a local state property
    // with a setAttendance method
    // const [attendance, setAttendance] = useState()
    // you will want to use a spread operator instead of push for this
    // you might want to have the student attendance state live at the parent level 
    // and pass it into the student attendance component as a prop - then use a callback prop 
    // to adjust the state at the parent level
    
    // push.student.id into line 44
    // AddPeriod.defaultProps = {
    //     history: {
    //         push: () => { }
    //     },
    // }

    // React.createElement(
    //     type,
    //     [props],
    //     [...children]
    // )

    // attendance: [
    //     {
    //         date: xxx,
    //         present: true
    //     },
    // ]

    // .then(attendance => {
    //     context.StudentCalendar(calendar)
    //     props.history.push(`/student-calendar/:id ${student.id}`)
    // }

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
                        <span>{student.last_name}, {student.first_name}: Period {student.class_period}</span>
                    </button>
                </Link>
                <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={present} className="present"></input>
            </label>
        </div>
    )
}

// function CheckBox() {
//     ReactDOM.render(
//       <Check date={new Check()} />,
//       document.getElementById('root')
//     );
//   }

// student Attendance component state variable for one student 