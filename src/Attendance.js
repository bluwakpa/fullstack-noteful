import React, { useState, useContext } from 'react';
import App from './App';
import data from './data'
import ApiContext from './ApiContext';
import { Route, Link } from 'react-router-dom'
import AddPeriod from './AddPeriod'

export default function Attendance(props) {
    const period = (props.match.params.period)
    const context = useContext(ApiContext)
    // console.log(context.students)
    const filteredStudents = (!period)
        ? context.students
        : context.students.filter(student => student.class_period === parseInt(period))
    return (
        <main role="main">
            <header>

                <h1>Attendance</h1>
            </header>

            <article className="form-section">
                <label className="dream-date-label" htmlFor="date-month">Date</label>
                <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> .
                <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required="" /> .
                <input type="number" name="date-year" className="date-year" placeholder="2021" min="2021" max="2031" required="" />
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
                        filteredStudents.map(student => (
                            
                            <div>
                                
                                <label htmlFor="dream-type-normal">
                                    <Link to={`/edit-student/${student.id}`}><button type='submit'><span>{student.last_name}, {student.first_name}: Period {student.class_period}</span></button></Link>
                                    <input type="checkbox" name="dream-type" id="dream-type-normal" value="0" className="dream-type-radio"></input>
                                </label>
                            </div>
                        ))
                    }
                    {/* submit the attendance to student data */}
                    <button type="submit">Submit</button>
                </form>

                <section className="button-section">
                    <Link to="/edit-student"><button>Add Student </button></Link>

                </section>
            </section>
        </main>
    );
}