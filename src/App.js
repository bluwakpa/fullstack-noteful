import React, { useState } from 'react';
import data from './data';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Attendance from './Attendance';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Home from './Home';
import ApiContext from './ApiContext';
import StudentCalendar from './StudentCalendar'

export default function App(props) {
    const [periods, setPeriods] = useState(data.periods)
    const [students, setStudents] = useState(data.students)
    // const [attendance, setAttendance] = useState(data.attendance)

    const handleClickDelete = (e) => {
        e.preventDefault()
        const students = props.match.params.id
        console.log("students", students)
    }
    const value = {
        periods,
        students,
        setStudents,
        handleClickDelete
    }

    const handleAddStudent = students

    
    return (
        <ApiContext.Provider value={value}>
            <div>
                <nav role="navigation">
                    <Link to="/"> Present </Link>
                    {/* <br /> */}
                    {/* <Link to="/add-student"> Student |</Link> */}
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/student-calendar/:id" component={StudentCalendar} />
                <Route path="/edit-student/:id" render={(props) => <EditStudent {...props} title={`Props through render`} />} />

                <footer role="content-info">Copyright 2021</footer>
            </div>
        </ApiContext.Provider>
    );
}