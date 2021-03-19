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

<div>

<Student
    first_name={students.first_name}
    last_name={students.last_name}
    id={students.id}
    class_period={students.class_period}
    date={students.date}
    present={students.present}
    onDeleteNote={this.handleDeleteStudent}
/>

</div>

<div>

<button
    className='Student__delete'
    type='button'
    onClick={this.handleClickDelete}
    ></button>

</div>