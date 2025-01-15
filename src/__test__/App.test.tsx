import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import "jest-canvas-mock";
import App from '../components/App';

test("Carga de página principal", () => {
  render(<App />);
  expect(true).toBeTruthy();
})