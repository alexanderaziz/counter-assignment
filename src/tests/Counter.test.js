import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter text', () => {
  render(<Counter />);
  const counterText = screen.getByText(/Counter/i);
  expect(counterText).toBeInTheDocument();
});

test('initial number is 0', () => {
  render(<Counter />);
  const initialNumber = screen.getByTestId('count');
  expect(initialNumber.textContent).toBe('0');
});

test('increment counter text', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  const counterText = screen.getByTestId('count');
  fireEvent.click(incrementButton);
  expect(counterText.textContent).toBe('1');
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(counterText.textContent).toBe('3');
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(counterText.textContent).toBe('5');
});

test('decrement counter text', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  const counterText = screen.getByTestId('count');
  fireEvent.click(decrementButton);
  expect(counterText.textContent).toBe('-1');
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  expect(counterText.textContent).toBe('-3');
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  expect(counterText.textContent).toBe('-5');
});
