import React, { useContext, useState } from 'react';
// import App from './App';
// import data from './data'
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'
// import AddPeriod from './AddPeriod'

export default function Attendance(props) {
    const period = (props.match.params.period)
    const context = useContext(ApiContext)
    const [present, setPresent] = useState(false)

    // console.log(context.students)
    const filteredStudents = (!period)
        ? context.students
        : context.students.filter(student => student.class_period === parseInt(period))

    const handleChange = (e, id) => {
        // setPresent(!e.target.checked)
        let updated = context.students.map(student => {
            if(student.id === id){
                student.present=!student.present
                student.modified = new Date()
            }
            return student;
        })
        
        // let removed = context.students.filter(student => student.id !== id)
        context.setStudents(updated)
    }


    return (
        <main role="main">
            <header>

                <h1>Attendance</h1>
            </header>

            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date</label>
                {/* <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> .
                <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required="" /> .
                <input type="number" name="date-year" className="date-year" placeholder="2021" min="2021" max="2031" required="" /> */}
            </article>

            <section className="form-section dream-type-section">
                <h2>Students</h2>

                {
                    filteredStudents.forEach(student => (
                        <label htmlFor="dream-type-normal">
                            <h3>Period {student.class_period}</h3>
                        </label>
                    ))
                }

                <form>
                    {/* student names Link to EditStudent */}
                    {
                        filteredStudents.map((student, index) => (
                            <div>
                                <label htmlFor="present">
                                    <Link to={`/edit-student/${student.id}`}>
                                        <button type='submit'>
                                            <span>{student.last_name}, {student.first_name}: Period {student.class_period}</span>
                                        </button>
                                    </Link>
                                    <input onChange={(e) => handleChange(e, student.id)} type="checkbox" name="present" id="present" value={student.present} checked={student.present} className="present"></input>
                                </label>
                            </div>
                        ))
                    }
                    {/* submit the attendance to student data */}
                    <button type="submit">Submit</button>
                </form>

                <section className="button-section">
                    <Link to="/add-student"><button>Add Student </button></Link>

                </section>
            </section>
        </main>
    );
}