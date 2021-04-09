import React, { useState, useContext, useEffect } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'

export default function EditStudent(props) {
    const context = useContext(ApiContext)
    console.log('context', context)
    console.log('context.students', context.students) // setState students to undefined, or updateStudents etc
    const student = context.students.find(student => student.id === props.match.params.id);
    console.log('student', student)
    const studentIndex = context.students.indexOf(student)
    console.log('student.first_name', student.first_name)
    const [firstName, setFirstName] = useState(student.first_name)
    const [lastName, setLastName] = useState(student.last_name)
    const firstNameChange = function (e) { setFirstName(e.target.value) }
    const lastNameChange = function (e) { setLastName(e.target.value) }
    const setStudents = context.setStudents
    const [attendance, setAttendence] = useState({id: '', modified: new Date(), present: []});
    const updateStudents = (newStudent) => {
        context.setStudents([...context.students, newStudent])
    }


    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        const newStudent = { ...student, first_name: firstName, last_name: lastName }
        const newStudents = [...context.students]
        newStudents[studentIndex] = newStudent
        console.log('newStudent', newStudent)
        setStudents(newStudents)
    }

    const handleClickDelete = () => {
        const id = props.match.params.id
        let deleted = context.students.filter(student => student.id !== id)
        console.log('handleClickDelete student', student)
        setStudents(deleted)
    }
    

    return (
        <main role="main">
            <header role="banner">

                <h2>Edit Student</h2>
                {/* student ID to ensure not deleting wrong student */}
            </header>
            <section>

                <form className='signup-form' onSubmit={onSubmit} >
                    <div>
                        {/* Text box defaults as students information based on id */}
                        <label for="first-name">First name</label>
                        <input placeholder={student.first_name} onChange={firstNameChange} value={firstName} type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input placeholder={student.last_name} onChange={lastNameChange} value={lastName} type="text" name='last-name' id='last-name' />
                    </div>

                    {/* submit changes to student data 
                    send user to addPeriod 
                    message: your student has been updated */}

                    <button type='submit'> Update </button>

                    {/* delete student from class 
                    alert user
                    confirm delete: yes/no 
                    yes will send user to addPeriod */}

                    <button
                        className='Student__delete'
                        type='button'
                        onClick={handleClickDelete}
                    > Delete </button>

                    {/* view filtered student attendance history 
                    send user to calendar */}

                    <Link to={`/student-calendar/${student.id}`}>
                        <button type='submit'> View </button>
                    </Link>

                </form>
            </section>
        </main>
    );
}