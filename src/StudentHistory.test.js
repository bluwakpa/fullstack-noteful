import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ApiContext from './ApiContext';
import StudentHistory from './StudentHistory';

test('renders learn react link', () => {

  const match = {
    params: { id: 1 }
  }
  const value = {
    students: [{
      id: 1,
      first_name: 'Maria',
      last_name: 'Garcia',
      attendance: {
        "Today": false,
        "Yesterday": false
      }
    }]
  }
  render(
    <ApiContext.Provider value={value}>
      <BrowserRouter>
        <StudentHistory match={match} />
      </BrowserRouter>
    </ApiContext.Provider>
  );
});