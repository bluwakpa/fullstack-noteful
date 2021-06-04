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
        e.preventDefault()
        const updatedStudent = { ...student, first_name: firstName, last_name: lastName }
        const newStudents = [...context.students]
        newStudents[studentIndex] = updatedStudent
        context.setStudents(newStudents)

        fetch(`${config.API_ENDPOINT}/api/students/${student.id}`, {
            mode: 'cors',
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStudent),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(updatedStudent => {
                const studentsNotUpdated = context.students.filter(student =>
                    student.id !== updatedStudent.id
                    );
                context.setStudents([...studentsNotUpdated, updatedStudent])

                props.history.push(`/attendance`)
            })
            .catch(error => {
                console.error({ error })
            })
    }

    const handleClickDelete = (e) => {
        e.preventDefault()
        const studentId = Number(props.match.params.id)
        let deleted = context.students.filter(student => student.id !== studentId)
        setStudents(deleted)
        
        fetch(`${config.API_ENDPOINT}/api/students/${student.id}`, {
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
                </header>
                <div>
                    <input placeholder={student.first_name} onChange={firstNameChange} value={firstName} className="input" type="text" name='first-name' id='first-name' />
                </div>
                <div>
                    <input placeholder={student.last_name} onChange={lastNameChange} value={lastName} className="input" type="text" name='last-name' id='last-name' />
                </div>
                <section>
                    {/* submit changes to student data
                    send user to addPeriod
                    message: your student has been updated */}

                    <button
                        type='submit'
                        className="button"
                    > Update </button>

                    {/* delete student from class
                    alert user
                    confirm delete: yes/no
                    yes will send user to addPeriod */}

                    <button
                        type='button'
                        className="button"
                        onClick={handleClickDelete}
                    > Delete </button>

                    <Link to={`/student-history/${student.id}`}>
                        <button type='submit' className="button"> View </button>
                    </Link>
                </section>
            </form>
        </main>
    );
}