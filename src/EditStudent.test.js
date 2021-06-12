import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditStudent from './EditStudent';

test('renders learn react link', () => {
  render(<BrowserRouter>
    <EditStudent />
  </BrowserRouter>);
});