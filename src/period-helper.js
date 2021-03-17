export const getAttendance = (period = [], periodId) => (
    (!periodId)
        ? student
        : students.filter(student => student.periodId === parseInt(periodId))
)