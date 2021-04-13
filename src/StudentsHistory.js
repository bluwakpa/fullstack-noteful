import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import { Link, useHistory } from 'react-router-dom'
import Attendance, { updateStudents, handleSubmit } from './Attendance'

export default function StudentsHistory(props) {
    const history = useHistory();
    const context = useContext(ApiContext);
    const students = context.students


    return (
        <main role="main">
            <header role="banner">
                <h2>Students History</h2>
                {students.map(student => (
                    <div>
        
                    {/* <h3>
                        {student.first_name} {student.last_name} <br />
                    </h3> */}

                    <div>
                        {
                            Object.entries(student.attendance).map(([name, date, present]) => (
                                
                                <div>
                                    <p>{name}</p>
                                    <p>{date}</p>
                                    <p>{present ? "Present" : "Absent"}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                ))}
                
            </header>
            <section className="button-section">
                <Link to="/attendance"><button> Attendance </button></Link>
            </section>
        </main>
    );
}