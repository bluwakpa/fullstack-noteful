import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPeriod from './AddPeriod'
import Attendance from './Attendance'

export default function EditStudent() {
    return (
        <main role="main">
            <header role="banner">
                <h2>About</h2>
            </header>
            <section>
                <p>Take attendance of your classroom by creating student profiles for each class period.</p>
            </section>
            <section class="button-section">
                <Link to="/attendance"><button>Start</button></Link>
            </section>
        </main>
    );
}