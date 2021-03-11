import React, { useState } from 'react';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import AddPeriod from './AddPeriod'
import Attendance from './Attendance'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'
import Home from './Home'

export default function App() {
    return (

        <BrowserRouter>
            <div>
                <nav role="navigation">
                    {/* <Link to="/">Back</Link> */}
                    <Link to="/"> Present |</Link>
                    <Link to="/add-period">| Home </Link>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/add-period" component={AddPeriod} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/edit-student" component={EditStudent} />

                <footer role="content-info">Copyright 2021</footer>
            </div>
        </BrowserRouter>
    );
}