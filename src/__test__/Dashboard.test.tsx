import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Dashboard from '../components/routes/Dashboard';

test('Carga de Dashboard', async () => {
  render(<Dashboard />);

  expect(await screen.findByText('David L. Molina Ojeda')).toBeVisible();

});