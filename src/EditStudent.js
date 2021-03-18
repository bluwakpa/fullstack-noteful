import React, { useState, useContext } from 'react';
import App from './App';
import data from './data'
import ApiContext from './ApiContext';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPeriod from './AddPeriod'
import Attendance from './Attendance'

export default function EditStudent(props) {
    const context = useContext(ApiContext)
    const student = context.students.find(student => student.id === props.match.params.id);
    const studentIndex = context.students.indexOf(student)
    const [firstName, setFirstName] = useState(student.first_name)
    const [lastName, setLastName] = useState(student.last_name)
    const [classPeriod, setClassPeriod] = useState(student.class_period)
    const firstNameChange = function(e) {setFirstName(e.target.value)} 
    const lastNameChange = function(e) {setLastName(e.target.value)}
    const classPeriodChange = function(e) {setClassPeriod(e.target.value)}
    const setStudents = context.setStudents
    const onSubmit = (e) => {
        {/* insert fetch and then for db */}
        e.preventDefault()
        const newStudent = {...student, first_name:firstName, last_name:lastName, class_period:classPeriod}
        const newStudents = [...context.students]
        newStudents[studentIndex] = newStudent
        setStudents(newStudents)
    }
   
    return (
        <main role="main">
            <header role="banner">

                <h2>Edit Student</h2>
            </header>
            <section>

                <form className='signup-form' onSubmit={onSubmit}>
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
                                <select>
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
                    {/* submit changes to student data */}
                    <button type='submit'>Submit</button>
                    <button type='delete'>Delete</button>
                </form>
            </section>
        </main>
    );
}