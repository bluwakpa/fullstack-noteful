import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import data from './data';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Attendance from './Attendance';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import Home from './Home';
import ApiContext from './ApiContext';
import StudentHistory from './StudentHistory';
import StudentsHistory from './StudentsHistory';
import config from './config';

export default function App({match}, props) {
    const [students, setStudents] = useState([]);

    useEffect(()=> {
        fetch(`${config.API_ENDPOINT}/api/students`)
        .then(res => {
            if (!res.ok)
                return Promise.reject(res)
            return res.json()
          })
          .then((students) => {
            setStudents(students)
          })
          .catch(error => {
            console.error({ error })
          })
      },[])

    // const result = await axios.get()

    // const context = useContext(ApiContext);
    // const student = context.students.find(student => student.id === id);
    // console.log('student', student)

    // const student = useEffect();
    // console.log("student", student)


    const handleClickDelete = (e) => {
        /* insert fetch and then for db */
        e.preventDefault()
        const students = props.match.params.id
        console.log("students", students)

        fetch(`${config.API_ENDPOINT}/api/students`, {
        method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            
            },
        })
        .then(res => {
            if (!res.ok)
                return Promise.reject(e)
            this.context.setStudents(students)
        })
        .catch(error => {
            console.error({ error })
        })
    };

    const value = {
        students,
        setStudents,
        handleClickDelete
    };


    return (
        <ApiContext.Provider value={value}>
            <div>
                <nav role="navigation">
                    <Link to="/"><h1>Present</h1></Link>
                </nav>

                <Route exact path="/" component={Home} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/add-student" component={AddStudent} />
                <Route path="/student-history/:id" component={StudentHistory} />
                <Route path="/students-history" component={StudentsHistory} />
                <Route path="/edit-student/:id" render={(props) => <EditStudent {...props} title={`Props through render`} />} />

            </div>
            <footer role="contentinfo">Copyright 2021</footer>
        </ApiContext.Provider>
    );
}