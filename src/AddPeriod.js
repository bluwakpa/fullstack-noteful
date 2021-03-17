import React, { useState, useContext } from 'react';
import App from './App';
import data from './data';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Attendance from './Attendance';
import PresentForm from './PresentForm';
import ApiContext from './ApiContext'

export default function AddPeriod(props) {

    AddPeriod.defaultProps = {
        history: {
            push: () => { }
        },
    }
    const context = useContext(ApiContext)

    const handleSubmit = e => {
        e.preventDefault()
        const period = {
            name: e.target['period-number'].value
        }
        //   fetch(`${config.API_ENDPOINT}/periods`, {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(period),
        //   })
        //     .then(res => {
        //       if (!res.ok)
        //         return res.json().then(e => Promise.reject(e))
        //       return res.json()
        //     })
        //     .then(period => {
        //       context.addPeriod(period)
        //       props.history.push(`/period/${period.id}`)
        //     })
        //     .catch(error => {
        //       console.error({ error })
        //     })
    }

    return (
        <main role="main">
            <header role="banner">
                <h2>Select Period</h2>
            </header>
            <PresentForm onSubmit={handleSubmit}>
                <form>
                    {
                        context.periods.map(period => (
                            <div>
                                <Link to={`/attendance/${period.period}`}><button type='submit'><span>Classroom Period {period.period}</span></button></Link>
                                {/* <label htmlFor="dream-type-normal">
                                    <span>Classroom Period {period.period}</span>
                                    <input type="radio" name="dream-type" id="dream-type-normal" value="0" className="dream-type-radio"></input>
                                </label> */}
                            </div>
                        ))
                    }
                    {/* <section className="results"> */}
                        <div className="container-fluid">
                            {/* <div className="container"> */}
                                {/* <div className="row"> */}
                                    {/* <div className="col-sm-8 start">
                                        <p className="box description">Classroom</p>
                                        <p className="box description">Period 1</p>
                                    </div> */}
                                    <section className="button-section">
                                        <span className="custom-dropdown big">
                                            <select>
                                                <option value=""> Add Classroom Period </option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                                <option value='6'>6</option>
                                            </select>
                                        </span>
                                    </section>

                                    {/* <Link to="/add-student"><button type='submit'>Add</button></Link> */}
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                    {/* </section> */}
                </form>
            </PresentForm>
        </main>
    );
}