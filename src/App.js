import React, { useState } from 'react';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
// import AddPeriod from './AddPeriod'
// import AddStudent from './AddStudent'
// import Attendance from './Attendance'
// import EditStudent from './EditStudent'

export default function App() {
    return (

        <BrowserRouter>

            <Link to={location => ({ ...location, pathname: "/courses" })} />
            <Link to={location => `${location.pathname}?sort=name`} />

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
                <footer role="content-info">Copyright 2021</footer>
            </div>
        </BrowserRouter>
    );
}

//     <main className='App'>
//       {/* content goes here */}
//     </main>
//   );
// }