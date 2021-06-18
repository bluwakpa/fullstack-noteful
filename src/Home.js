import React, { } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function App() {
    return (
        <div>
            <main role="main" />
            <header role="banner">
                <h2>
                    Home
                </h2>
                <p className="text-left">
                    Take attendance of your classroom and edit student profiles.
                        <br></br>
                    Begin by adding each student to your roster and the attendance form will provide you a list of all students you create.
                        <br></br>
                    When your roster is complete, begin taking attendance of your classroom by checking present students.
                        <br></br>
                    Once present students are checked, submit attendance and review the students attendance history.
                        <br></br>
                    You may revise attendance by returning to Student Attendance and de/selecting students prior to submitting revised student attendance.
                        <br></br>
                    You may also edit each student's name and view their individual attendance history.
                </p>
            </header>
            <section className="button-section">
                <Link to="/attendance">
                    <button className="button">
                        Take Attendance
                    </button>
                </Link>
            </section>
        </div>
    );
}