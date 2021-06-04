import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'

export default function StudentsHistory(props) {
    const context = useContext(ApiContext);
    const students = context.students


    return (
        <main role="main">
            <header role="banner">
                <h2>Students History</h2>
                {students.map(student => (
                    <div key={student.id}>
                        <h3>
                            {student.first_name} {student.last_name} <br />
                        </h3>
                        <div>
                            {
                                Object.entries(student.attendance).map(([date, present]) => (
                                    <div key={date}>
                                        <p>{date}: {present ? "Present" : "Absent"}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </header>
            <section className="button-section">
                <Link to="/attendance"><button className="button"> Attendance </button></Link>
            </section>
        </main>
    );
}