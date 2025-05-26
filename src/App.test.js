import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon Table Booking heading', () => {
  render(<App />);
  const heading = screen.getByText(/little lemon table booking/i);
  expect(heading).toBeInTheDocument();
});
