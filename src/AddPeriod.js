import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { Route, Link } from 'react-router-dom'

export default function Attendance() {
    return (
        <div>
            <nav role="navigation">
                <a href="#back">Back</a>
                <a href="#index">Present</a>
                <a href="#attendance">Home</a>
            </nav>

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
                                <footer role="content-info">Copyright 2021</footer>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}