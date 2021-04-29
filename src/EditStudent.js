import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom';
import config from './config';

export default function EditStudent(props) {
    const context = useContext(ApiContext)
    const student = context.students.find(student => student.id === Number(props.match.params.id)) || {};
    const studentIndex = context.students.indexOf(student)
    const [firstName, setFirstName] = useState(student ? student.first_name : '')
    const [lastName, setLastName] = useState(student ? student.last_name : '')
    const firstNameChange = function (e) { setFirstName(e.target.value) }
    const lastNameChange = function (e) { setLastName(e.target.value) }
    const [students, setStudents] = useState([]);

    const onSubmit = (e) => {
        /* insert fetch and then for db */
        e.preventDefault()
        console.log('inside handleClickDelete')
        const newStudent = { ...student, first_name: firstName, last_name: lastName }
        const newStudents = [...context.students]
        newStudents[studentIndex] = newStudent
        console.log('newStudent', newStudent)
        setStudents(newStudents)
        props.history.push(`/attendance`)
    }

    const handleClickDelete = (e) => {
        e.preventDefault()
        const studentId = Number(props.match.params.id)
        let deleted = context.students.filter(student => student.id !== studentId)
        setStudents(deleted)

        /* fetch from the db */
        fetch(`${config.API_ENDPOINT}/api/students/${studentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return Promise.reject(e)
                context.setStudents(deleted);
                props.history.push(`/attendance`);
            })
            .catch(error => {
                console.error({ error })
            })
    };

    return (
        <main role="main">
            <form className='signup-form' onSubmit={onSubmit} >
                <header role="banner">
                    <h2>Edit Student</h2>
                    {/* student ID to ensure not deleting wrong student */}
                </header>
                <div>
                    {/* Text box defaults as students information based on id */}
                    <label for="first-name">First name</label>
                    <input placeholder={student.first_name} onChange={firstNameChange} value={firstName} type="text" name='first-name' id='first-name' />
                </div>
                <div>
                    <label for="last-name">Last name</label>
                    <input placeholder={student.last_name} onChange={lastNameChange} value={lastName} type="text" name='last-name' id='last-name' />
                </div>
                <section>
                    {/* submit changes to student data
                    send user to addPeriod
                    message: your student has been updated */}

                    <button
                        type='submit'
                    > Update </button>

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
                    send user to student history */}

                    <Link to={`/student-history/${student.id}`}>
                        <button type='submit'> View </button>
                    </Link>
                </section>
            </form>
        </main>
    );
}