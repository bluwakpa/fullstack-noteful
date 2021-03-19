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