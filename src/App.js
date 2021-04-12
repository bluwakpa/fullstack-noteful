import React, { useState } from 'react';
import data from './data';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Attendance from './Attendance';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Home from './Home';
import ApiContext from './ApiContext';
import StudentHistory from './StudentHistory';
import StudentsHistory from './StudentsHistory'

export default function App(props) {
    const [students, setStudents] = useState(data.students)
    // const [attendance, setAttendance] = useState(data.attendance)

    const handleClickDelete = (e) => {
        e.preventDefault()
        const students = props.match.params.id
        console.log("students", students)
    }
    const value = {
        students,
        setStudents,
        handleClickDelete
    }


    return (
        <ApiContext.Provider value={value}>
            <div>
                <nav role="navigation">
                    <Link to="/"><h1>Present</h1></Link>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/student-history/:id" component={StudentHistory} />
                <Route path="/students-history" component={StudentsHistory} />
                <Route path="/edit-student/:id" render={(props) => <EditStudent {...props} title={`Props through render`} />} />

            </div>
            <footer role="content-info">Copyright 2021</footer>
        </ApiContext.Provider>
    );
}