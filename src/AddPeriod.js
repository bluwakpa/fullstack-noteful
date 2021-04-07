import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from './ApiContext'

export default function AddPeriod(props) {
    const context = useContext(ApiContext)
    console.log(context.periods)
    const init = {
        period: ""
    }
    const [formData, setFormData] = useState(init)
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        const newPeriod = {
            period: parseInt(formData.period),
        }
        context.setPeriods([...context.periods, newPeriod])
        props.history.push(`/attendance/${formData.period}`)
    }
    AddPeriod.defaultProps = {
        history: {
            push: () => { }
        },
    }

    let allPeriods = [1,2,3,4,5,6]

    allPeriods = allPeriods.filter(filteredPeriod => !context.periods.some(period => period.period === filteredPeriod))
    console.log(allPeriods)
    
    return (
        <main role="main">
            <header role="banner">
                <h2>Select Period</h2>
            </header>
                <div>
                    {
                        context.periods.map(period => (
                            <div>
                                <Link to={`/attendance/${period.period}`}>
                                    <button type='submit'>
                                        <span>Classroom Period {period.period}</span>
                                    </button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <form className='signup-form' onSubmit={onSubmit}>
                    <div className="container-fluid">
                        <section className="button-section">
                            <span className="custom-dropdown big">
                                <select value={formData.period} name='period' onChange={handleChange} required>
                                    <option value=""> Add Classroom Period </option>
                                    {
                                        allPeriods.map(period => (
                                            <option value={period}>{period}</option>
                                        ))
                                    }
                                </select>
                            </span>
                            <button type='submit' > Submit </button>
                        </section>
                    </div>
                </form>
        </main>
    );
}