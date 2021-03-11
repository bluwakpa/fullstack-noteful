import React, { useState } from 'react';
import App from './App';
// import data from './data'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Attendance from './Attendance'
import AddPeriod from './AddPeriod'

export default function AddStudent() {
    return (
        <main role="main">
            <header role="banner">
                <h2>Add Student</h2>
            </header>
            <section>
                <form class='signup-form'>
                    <div>
                        <label for="first-name">First name</label>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label for="last-name">Last name</label>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                    </div>
                    <section class="button-section">
                        <span class="custom-dropdown big">
                            <select>
                                <option value=""> Period </option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                            </select>
                            {/* <!--<input type='submit' value='submit'>--> */}
                        </span>
                        <button type='submit'>Add</button>
                    </section>
                    
                </form>
            </section>
        </main>
    );
}