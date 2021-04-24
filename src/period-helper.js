import AddPeriod from "./AddPeriod"
import Attendance from "./Attendance"
import EditStudent from "./EditStudent"
import App from "./Home"
import StudentAttendance from "./StudentAttendance"

export const getAttendance = (period = [], periodId) => (
    
    (!periodId)
        ? student
        : students.filter(student => student.periodId === parseInt(periodId))
)

// which goes into App.js and EditStudent.js ?

const value = {
    deleteStudent: handleDeleteStudent,
}

const handleDeleteStudent = student => {
    setStudent(students.filter(students => student.id !== student))
}

handleDeleteStudent = student => {
    this.props.history.push(`/`)
}

handleClickDelete = e => {
    e.preventDefault()
    const students = this.props.id

        < div >

        <Student
            first_name={students.first_name}
            last_name={students.last_name}
            id={students.id}
            class_period={students.class_period}
            date={students.date}
            present={students.present}
            onDeleteNote={this.handleDeleteStudent}
        />

</div >

<div>

<button
    className='Student__delete'
    type='button'
    onClick={this.handleClickDelete}
    ></button>

</div>

<div>

<button
    type='button'
    onClick={() => props.onClickDelete(props.id)}
    >
</button>

</div>

Card.propTypes = {
    onClickDelete: () => {}
  }

<div className='List-students'>
        {props.students.map((student) =>
          <Student
            key={student.id}
            id={student.id}
            title={student.title}
            content={student.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          + Add Student
        </button>
      </div>

handleDeleteCard = (studentId) => {
    const { lists, allStudents } = this.state.period;

<div className='App-students'>
          {period.students.map(students => (
            <Students
              key={students.id}
              id={students.id}
              header={students.header}
              cards={students.cardIds.map(id => store.allStudents[id])}
              onClickDelete={this.handleDeleteStudent}
              onClickAdd={this.handleAddStudent}
            />
          ))}
        </div>

<h1>Attendance</h1>
                <h3>
                    Period {period}
                </h3>

...student, // use all old student properties
present // EXCEPT present; use local

const editStudent = (newStudent) =>{
  let newStudent = [...students];
  for (let i = 0; i < newStudents.length; i++) {
      if (newStudents[i].id === newStudents.id) {
          newStudents[i] = newStudent;
      }
  }
  setStudents(newStudents);
}

StudentAttendance
    // const [periods, setPeriods] = useState(data.periods)
    // const [students, setStudents] = useState(data.students)
    // const [firstName, setFirstName] = useState(student.first_name)
    // const [lastName, setLastName] = useState(student.last_name)
    // const [classPeriod, setClassPeriod] = useState(student.class_period)

    // 2
    // const handleChange = (e) => {
    //     present = !present; // replace attendance array []
    // }

    // Mike:
    // As far as I can tell, the "attendance array" in StudentAttendance is not necessary. 
    // StudentAttendance is only showing one student at a time, and that `student` object 
    // is passed in through its props. Great composition! Instead of an `attendance` array, 
    // we can use a `present` boolean that defaults to `student.present`. Then the `handleChange` 
    // function can look like this.


    // Then, when the user submits the StudentAttendance form, we can update that student. 
    // I see that `editStudent` exists on the context; we'll need to define that function in App, 
    // and make that context available to the StudentAttendance component.
    // Now we can go to App and define `editStudent`. It should take in a student object and update 
    // that student in App's state. I'm assuming that a student's ID will never change.

    // Make sure to put `editStudent` on App's `value` as well, that way it will be available on the context.
    // In StudentCalendar, you can also add the `useContext(ApiContext)` hook; then it can use the `students` 
    // from that context instead of from the data file. That way, any time StudentAttendance changes a student, 
    // StudentCalendar should reflect that change, since they're both using the context.

    // Jonathan:
    // I think you could make attendance into a local state property
    // with a setAttendance method
    // const [attendance, setAttendance] = useState()
    // you will want to use a spread operator instead of push for this
    // you might want to have the student attendance state live at the parent level 
    // and pass it into the student attendance component as a prop - then use a callback prop 
    // to adjust the state at the parent level
    
    // push.student.id into line 44
    // AddPeriod.defaultProps = {
    //     history: {
    //         push: () => { }
    //     },
    // }

    // React.createElement(
    //     type,
    //     [props],
    //     [...children]
    // )

    // attendance: [
    //     {
    //         modified: {},
    //         present: true
    //     },
    // ]

    // .then(attendance => {
    //     context.StudentCalendar(calendar)
    //     props.history.push(`/student-calendar/:id ${student.id}`)
    // }

    // 3 Replace onSubmit
    const onSubmit = (e) => {
      /* insert fetch and .then for db */
      e.preventDefault()
      const newStudent = {
      //     ...student, // use all old student properties
      //     present // EXCEPT present, use only local present
      // }
      // editStudent(newStudent);
          first_name: formData.firstName,
          last_name: formData.lastName,
          id: uuidv4(),
          class_period: parseInt(formData.period),
          date: new Date(),
          present: false
      }
      updateStudents(newStudent)
  }

                  {/* 3 No longer need .id
                <input onChange={handleChange} type="checkbox" name="present" id="present" value={present} className="present"></input> */}


// function CheckBox() {
//     ReactDOM.render(
//       <Check date={new Check()} />,
//       document.getElementById('root')
//     );
//   }

// student Attendance component state variable for one student 

Attendance
    // const student = context.students.find(student => student.id === props.match.params.id);
    // const [present, setPresent] = useState(student.present)

    // let removed = context.students.filter(student => student.id !== id)

        // const [attendance, setAttendance] = useState(data.attendance)

        {/* <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> .
                <input type="number" name="date-day" className="date-day" placeholder="01" min="1" max="31" required="" /> .
                <input type="number" name="date-year" className="date-year" placeholder="2021" min="2021" max="2031" required="" /> */}
                {/* {
                    filteredStudents.forEach(student => (
                        <label htmlFor="dream-type-normal">
                            <h3>Period {student.class_period}</h3>
                        </label>
                    ))
                } */}

App
    // const [students, deleteStudents] = useState(data.students)
    // 4
    // const editStudent = (newStudent) => {
    //     let newStudent = [...students];
    //     for (let i = 0; i < newStudents.length; i++) {
    //         if (newStudents[i].id === newStudents.id) {
    //             newStudents[i] = newStudent;
    //         }
    //     }
    //     setStudents(newStudents);
    // }

    // const handleClickDelete = student => {
    //     setStudents([
    //         ...students,
    //         student
    //     ])
    // }
    // make a new delete function in App.js that deletes the student from the state in App.js, 
    // and pass a reference to that function in the route to EditStudent. 
    // Then, in handleClickDelete in EditStudent, call that function (which should be in the props 
    // for EditStudent) to delete the student from the state Since the state lives in App.js
    // You need a function in App.js that removes the student from the state

    const value = {
      periods,
      students,
      setStudents,
      setPeriods,
      // deleteStudent: handleDeleteStudent,
      // addStudents,
      // deleteStudents,
      handleClickDelete
  }

AddPeriod
</header>
            {/* <PresentForm onSubmit={handleSubmit}> */}
                        {/* </PresentForm> */}

EditStudent
    // const onDelete = (e) => {
    //     e.preventDefault()
    //     const deleteStudent = {...student}
    //     const deleteStudents = [...context.students]
    //     deleteStudents[studentIndex] = deleteStudent
    //     setDelete(deleteStudents)
    //   }
    // onDelete={onDelete}