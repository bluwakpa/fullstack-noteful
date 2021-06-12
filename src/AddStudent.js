import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { BrowserRouter, Link } from 'react-router-dom';
import config from './config';

export default function AddStudent(props) {
    const context = useContext(ApiContext)

    const init = {
        firstName: "",
        lastName: "",
    }

    const [formData, setFormData] = useState(init)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newStudent = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            modified: new Date(),
            attendance: {
                "Today": false,
                "Yesterday": false
            }
        }

        fetch(`${config.API_ENDPOINT}/api/students`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(newStudent => {
                context.setStudents([...context.students, newStudent])
                props.history.push(`/attendance`)
            })
            .catch(error => {
                console.error({ error })
            })
    }


    return (
      
            <main role="main">
                <form className='signup-form' onSubmit={onSubmit}>
                    <header role="banner">
                        <h2>Add Student</h2>
                    </header>
                    <div>
                        <input required='' className="input" type="text" placeholder='First Name' name='firstName' id='first-name' value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <input required='' className="input" type="text" placeholder='Last Name' name='lastName' id='last-name' value={formData.lastName} onChange={handleChange} />
                        <section className="button-section">
                            <p><button type='submit' className="button">Submit</button></p>
                            <p><Link to="/attendance"><button className="button-cancel"> Cancel </button></Link></p>
                        </section>
                    </div>
                </form>
            </main>
     
    );
}