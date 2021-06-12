import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Attendance from './Attendance';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <Attendance />
  </BrowserRouter>);
});