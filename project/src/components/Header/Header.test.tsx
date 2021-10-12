import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders welcome test', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Product List/i);
  expect(linkElement).toBeInTheDocument();
});
