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
    // const [periods, setPeriods] = useState(data.periods)
    // const [students, setStudents] = useState(data.students)
    // const [firstName, setFirstName] = useState(student.first_name)
    // const [lastName, setLastName] = useState(student.last_name)
    // const [classPeriod, setClassPeriod] = useState(student.class_period)
    const context = useContext(ApiContext)

    
    //1
    let attendance = []
    
    // set attendance to a global state
    // context grab attendance

    
    const handleChange = (e) => {
        setPresent(e.target.value)
        attendance.push({
            id: student.id,
            modified: new Date(),
            present: true
        })
        console.log('attendance', attendance)
    }

    //2
    // const handleChange = (e) => {
    //     present = !present; // replace attendance array []
    // }



    // Mike:
    // As far as I can tell, the "attendance array" in StudentAttendance is not necessary. 
    // StudentAttendance is only showing one student at a time, and that `student` object 
    // is passed in through its props. Great composition! Instead of an `attendance` array, 
    // we can use a `present` boolean that defaults to `student.present`. Then the `handleChange` 
    // function can look like this.


    // Then, when the user submits the StudentAttendance form, we can update that student. 
    // I see that `editStudent` exists on the context; we'll need to define that function in App, 
    // and make that context available to the StudentAttendance component.
    // Now we can go to App and define `editStudent`. It should take in a student object and update 
    // that student in App's state. I'm assuming that a student's ID will never change.

    // Make sure to put `editStudent` on App's `value` as well, that way it will be available on the context.
    // In StudentCalendar, you can also add the `useContext(ApiContext)` hook; then it can use the `students` 
    // from that context instead of from the data file. That way, any time StudentAttendance changes a student, 
    // StudentCalendar should reflect that change, since they're both using the context.

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
                        <span>{student.last_name}, {student.first_name}</span>
                        {/* : Period {student.class_period} */}
                    </button>
                </Link>
                <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={present} className="present"></input>
                {/* 3 No longer need .id
                <input onChange={handleChange} type="checkbox" name="present" id="present" value={present} className="present"></input> */}
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