import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext'
import { v4 as uuidv4 } from 'uuid';

export default function AddStudent(props) {
    const context = useContext(ApiContext)
    const init = {
        firstName: "",
        lastName: "",
        // period: ""
    }
    const [formData, setFormData] = useState(init)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        const newStudent = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            id: uuidv4(),
            attendance: {
                "2021-01-03": false,
                "2021-01-04": false
            }
        }
        context.setStudents([...context.students, newStudent])
        props.history.push(`/attendance/${formData.period}`)
    }
    return (
        <main role="main">
            <header role="banner">
                <h2>Add Student</h2>
            </header>
            <section className="student">
                <form className='signup-form' onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='firstName' id='first-name' value={formData.firstName} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="last-name">Last name</label>
                        <input type="text" name='lastName' id='last-name' placeholder='Last Name' value={formData.lastName} onChange={handleChange}/>
                        <section className="button-section">
                            <button type='submit' >Add</button>
                        </section>
                    </div>
                </form>
            </section>
        </main>
    );
}