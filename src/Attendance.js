import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { Route, Link } from 'react-router-dom'


export default function Attendance() {
    return (
        <div>
            <nav role="navigation">
                <a href="#back">Back</a>
                <Link to="/">Present</Link>
                <a href="#index">Present</a>
                <Link to="/">Home</Link>
                <a href="#attendance">Home</a>
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
            <footer role="content-info">Copyright 2021</footer>
        </div>
    );
}