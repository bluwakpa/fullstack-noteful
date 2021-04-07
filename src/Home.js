import React, {  } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export default function App() {
    return (
        <main role="main">
            <header role="banner">
                <h2>Home</h2>
            </header>
            <section>
                <p>Take attendance of your classroom and create new student profiles.</p>
            </section>
            <section className="button-section">
                <Link to="/attendance/1"><button> Take Attendance </button></Link>
            </section>
        </main>
    );
}