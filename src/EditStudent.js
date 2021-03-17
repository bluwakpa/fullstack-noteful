import React, { useState, useContext } from 'react';
import App from './App';
import data from './data'
import ApiContext from './ApiContext';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPeriod from './AddPeriod'
import Attendance from './Attendance'

export default function EditStudent(props) {
    const student = (props.match.params.id)
    const context = useContext(ApiContext)
    console.log(student)
    const filteredStudents = (!student)
        ? context.students
        : context.students.find(student => student.id === (student))
    return (
        <main role="main">
            <header role="banner">

                <h2>Edit Student</h2>
            </header>
            <section>

                <form className='signup-form'>
                    <div>
                        {/* Text box defaults as students information based on id */}
                        <label for="first-name">First name</label>
                        <input placeholder={student.first_name} type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input placeholder={student.last_name} type="text" name='last-name' id='last-name'  />
                    </div>
                    {/* View student attendance in calendar */}
                    <div>
                        <article className="button-section">
                            <span className="custom-dropdown big">
                                <select>
                                    {/* dropdown period defaults as students information */}
                                    <option value=""> Classroom Period </option>
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

                    <button type='submit'>Submit</button>
                    <button type='delete'>Delete</button>
                </form>
            </section>
        </main>
    );
}