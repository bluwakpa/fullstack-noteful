import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { Route, Link } from 'react-router-dom'

export default function Attendance() {
    return (
        <div>
            <nav role="navigation">
                <Link to="/">Back</Link>
                <Link to="/app">Present</Link>
                <Link to="/add-period">Home</Link>
            </nav>
            <main role="main">
                <header role="banner">
                    <h2>About</h2>
                </header>
                <section>
                    <p>Take attendance of your classroom by creating student profiles for each class period.</p>
                </section>
                <section class="button-section">
                    <a href="#attendance"><button>Start</button></a>
                </section>

            </main>
        </div>
    );
}