import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddStudent from './AddStudent';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <AddStudent />
  </BrowserRouter>);
});