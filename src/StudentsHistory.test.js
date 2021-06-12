import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StudentsHistory from './StudentsHistory';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <StudentsHistory />
  </BrowserRouter>);
});