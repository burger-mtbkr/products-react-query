import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Product List/i);
  expect(linkElement).toBeInTheDocument();
});
