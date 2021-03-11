import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Attendance from './Attendance'

export default function AddPeriod() {
    return (
        <main role="main">
            <header role="banner">
                <h2>Periods</h2>
            </header>
            <section class="results">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 start">
                                <p class="box description">Classroom</p>
                                <p class="box description">Period 1</p>
                            </div>
                            <section class="button-section">
                                <span class="custom-dropdown big">
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