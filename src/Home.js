import React, { } from 'react';
import { Link } from 'react-router-dom'
import './index.css';

export default function App() {
    return (
            <div>
                <main role="main" />
                <header role="banner">
                    <h2> Home </h2>
                    <p> Take attendance of your classroom and edit student profiles. </p>
                </header>
                <section className="button-section">
                    <Link to="/attendance"><button class="button"> Start </button></Link>
                </section>
            </div>
    );
}