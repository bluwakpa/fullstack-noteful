import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentHistory from './StudentHistory';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <StudentHistory />
  </BrowserRouter>);
});