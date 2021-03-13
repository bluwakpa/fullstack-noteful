import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPeriod from './AddPeriod'

export default function Attendance() {
    return (
        <main role="main">
            <header>

                <h2>Attendance</h2>
            </header>

            <article className="form-section">
                <label className="dream-date-label" forhtml="date-month">Date</label>
                <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""  /> .
                <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required="" /> .
                <input type="number" name="date-year" className="date-year" placeholder="2021" min="2021" max="2031" required=""  />
            </article>

            <section className="form-section dream-type-section">
                <h2>Students</h2>

                    <label forhtml="dream-type-normal">
                        <span>Maria Garcia</span>
                        <input type="radio" name="dream-type" id="dream-type-normal" value="0" className="dream-type-radio" defaultChecked></input>
                    </label>
                    <br></br>
                        <label forhtml="dream-type-lucid">
                            <span>Nushi Wang</span>
                                <input type="radio" name="dream-type" name="dream-type" id="dream-type-lucid" value="1" className="dream-type-radio"></input>
                        </label>
                        <br></br>
                        <label forhtml="dream-type-nightmare">
                            <span>Mohammed Kumar</span>
                                <input type="radio" name="dream-type" id="dream-type-nightmare" value="2" className="dream-type-radio"></input>
                        </label>
                        <br></br>
                        <label forhtml="dream-type=recurring">
                            <span>Jose Hernandez</span>
                            <input type="radio" name="dream-type" id="dream-type=recurring" value="3" className="dream-type-radio"></input>
                        </label>

                        <section className="button-section">
                            <Link to="/edit-student"><button>Add</button></Link>
                            <button type="submit">Submit</button>
                        </section>
            </section>
        </main>
    );
}