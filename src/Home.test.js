import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>);
});