import React from 'react'

export default React.createContext({
  periods: [],
  students: [],
  present: [],
  addPeriod: () => {},
  addStudent: () => {},
  editStudent: () => {},
})