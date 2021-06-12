import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentAttendance from './StudentAttendance';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <StudentAttendance />
  </BrowserRouter>);
});