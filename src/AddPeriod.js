import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Attendance from './Attendance'

export default function AddPeriod() {
    return (
        <main role="main">
            <header role="banner">
                <h2>Add Period</h2>
            </header>
            <section className="results">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 start">
                                <p className="box description">Classroom</p>
                                <p className="box description">Period 1</p>
                            </div>
                            <section className="button-section">
                                <span className="custom-dropdown big">
                                    <select>
                                        <option value=""> Add </option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                    </select>
                                </span>
                            </section>
                            <Link to="/add-student"><button type='submit'>Add</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}