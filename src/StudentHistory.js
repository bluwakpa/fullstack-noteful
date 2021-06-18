import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom';

export default function StudentHistory({ match }) {
    const context = useContext(ApiContext);
    const student = context.students.find(student =>
        student.id === Number(match.params.id));

    const listItems = context.students.map((student) =>
        <StudentHistory key={student.toString()}
            value={student} />
    );


    return (
        <main role="main">
            <header role="banner">
                <h2>Student History</h2>
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
            </header>
            <section className="button-section">
                <Link to="/attendance">
                    <button className="button">
                        Attendance
                        </button>
                </Link>
            </section>
        </main>
    );
}