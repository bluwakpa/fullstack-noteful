import React from 'react'

export default React.createContext({
  periods: [],
  students: [],
  addPeriod: () => {},
  addStudent: () => {},
  editStudent: () => {},
})