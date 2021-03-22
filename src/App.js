import React, { useState } from 'react';
import data from './data';
import { Route, Link } from 'react-router-dom';
import './index.css';
import AddPeriod from './AddPeriod';
import Attendance from './Attendance';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Home from './Home';
import ApiContext from './ApiContext';
import StudentCalendar from './StudentCalendar'

export default function App(props) {
    const [periods, setPeriods] = useState(data.periods)
    const [students, setStudents] = useState(data.students)
    // const [students, deleteStudents] = useState(data.students)
    const handleClickDelete = (e) => {
        e.preventDefault()
        const students = props.match.params.id
        console.log("students", students)
    }
    const value = {
        periods,
        students,
        setStudents,
        setPeriods,
        // deleteStudent: handleDeleteStudent,
        // addStudents,
        // deleteStudents,
        handleClickDelete
    }
    // console.log(data)
    const handleAddPeriod = period => {
        setPeriods([
            ...periods,
            period
        ])
    }
    // const handleClickDelete = student => {
    //     setStudents([
    //         ...students,
    //         student
    //     ])
    // }
    // make a new delete function in App.js that deletes the student from the state in App.js, 
    // and pass a reference to that function in the route to EditStudent. 
    // Then, in handleClickDelete in EditStudent, call that function (which should be in the props 
    // for EditStudent) to delete the student from the state Since the state lives in App.js
    // You need a function in App.js that removes the student from the state


    const handleAddStudent = students
    return (
        <ApiContext.Provider value={value}>
            <div>
                <nav role="navigation">
                    <Link to="/"> Present </Link>
                    <br />
                    {/* <Link to="/edit-student"> Edit |</Link> */}
                    <Link to="/add-student"> Student |</Link>

                    <Link to="/add-period">| Period </Link>
                    {/* <Link to="/attendance">| Attendance </Link> */}
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/add-period" component={AddPeriod} />
                <Route path="/attendance/:period" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/student-calendar/:id" component={StudentCalendar} />
                <Route path="/edit-student/:id" render={(props) => <EditStudent {...props} title={`Props through render`} />} />

                <footer role="content-info">Copyright 2021</footer>

            </div>
        </ApiContext.Provider>

    );
}