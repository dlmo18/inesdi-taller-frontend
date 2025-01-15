import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Header from '../components/layout/header';

test('Carga de Cabecera ', async () => {
  render(<Header />);

  expect(true).toBeTruthy();

  expect(await screen.findByText('Inicio')).toBeVisible();

})