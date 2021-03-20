import React, {  } from 'react';
// import data from './data'
import { Link } from 'react-router-dom'
import './index.css';
// import AddPeriod from './AddPeriod'
// import Attendance from './Attendance'
// import AddStudent from './AddStudent'
// import EditStudent from './EditStudent'

export default function App() {
    return (
        <main role="main">
            <header role="banner">
                <h2>Home</h2>
            </header>
            <section>
                <p>Take attendance of your classroom by creating student profiles for each class period.</p>
            </section>
            <section className="button-section">
                <Link to="/add-period"><button> Select Period </button></Link>
            </section>
        </main>
    );
}