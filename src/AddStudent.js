import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext'
import { v4 as uuidv4 } from 'uuid';

export default function AddStudent(props) {
    const context = useContext(ApiContext)
    const init = {
        firstName: "",
        lastName: "",
        period: ""
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
            class_period: parseInt(formData.period),
            attendance: []
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
                            <span className="custom-dropdown big">
                                <select value={formData.period} name='period' onChange={handleChange} required>
                                    <option value=""> Period </option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                </select>
                            </span>
                            <button type='submit' >Add</button>
                        </section>
                    </div>
                </form>
            </section>
        </main>
    );
}