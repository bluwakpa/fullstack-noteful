import React, { useState } from 'react';
import data from './data'
import { Route, Link } from 'react-router-dom'
import './index.css';
import AddPeriod from './AddPeriod'
import Attendance from './Attendance'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'
import Home from './Home'
import ApiContext from './ApiContext'

export default function App() {
    const [periods, setPeriods] = useState(data.periods)
    const [students, setStudents] = useState(data.students)
    const value = {
        periods, 
        students,
        setStudents
    }
    // console.log(data)

    return (
        <ApiContext.Provider value={value}>
            <div>
                <nav role="navigation">
                    <Link to="/"> Present </Link>
                    <br />
                    <Link to="/edit-student"> Edit |</Link>
                    <Link to="/add-student">| Student |</Link>

                    <Link to="/add-period">| Period |</Link>
                    <Link to="/attendance">| Attendance </Link>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/add-period" component={AddPeriod} />
                <Route path="/attendance/:period" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />

                <footer role="content-info">Copyright 2021</footer>
            </div>
        </ApiContext.Provider>

    );
}