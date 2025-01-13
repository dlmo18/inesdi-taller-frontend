// import react-testing methods
import {render, screen} from '@testing-library/react'
// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Header from '../src/components/layout/header'

test('loads and displays menu', async () => {
  // Render a React element into the DOM
  render(<Header />)

  await userEvent.click(screen.getByText('Load Greeting'))
  // wait before throwing an error if it cannot find an element
  await screen.findByRole('heading')

  // assert that the alert message is correct using
  // toHaveTextContent, a custom matcher from jest-dom.
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})