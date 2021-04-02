import React, { useState, useContext, useEffect } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'

export default function EditStudent(props) {
    const context = useContext(ApiContext)
    const student = context.students.find(student => student.id === props.match.params.id);
    const studentIndex = context.students.indexOf(student)
    const [firstName, setFirstName] = useState(student.first_name)
    const [lastName, setLastName] = useState(student.last_name)
    const [classPeriod, setClassPeriod] = useState(student.class_period)
    const firstNameChange = function (e) { setFirstName(e.target.value) }
    const lastNameChange = function (e) { setLastName(e.target.value) }
    const classPeriodChange = function (e) { setClassPeriod(e.target.value) }
    const setStudents = context.setStudents
    const [attendance, setAttendence] = useState({id: '', modified: new Date(), present: []});

    // console.log('attendence ==>', [attendance])

    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        const newStudent = { ...student, first_name: firstName, last_name: lastName, class_period: parseInt(classPeriod) }
        const newStudents = [...context.students]
        newStudents[studentIndex] = newStudent
        console.log('EditStudent', newStudent)
        setStudents(newStudents)
    }

    const handleClickDelete = () => {
        // e.preventDefault()
        const id = props.match.params.id
        let deleted = context.students.filter(student => student.id !== id)
        // console.log("deleted", deleted)
        setStudents(deleted)
        props.history.push("/add-period")
        // console.log("student", student)
    }
    console.log(student)

    return (
        <main role="main">
            <header role="banner">

                <h2>Edit Student</h2>
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
                    {/* View student attendance in calendar */}
                    <div>
                        <article className="button-section">
                            <span className="custom-dropdown big">
                                <select onChange={classPeriodChange} type="number">
                                    {/* dropdown period defaults as students information */}
                                    <option value=""> {student.class_period} </option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>

                            </span>
                        </article>
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