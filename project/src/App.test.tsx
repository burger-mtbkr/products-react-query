import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header/Header';
import { TestIds } from './utils';
import Home from './views/Home';

describe(`${Header.name} tests`, () => {
  test('renders App Header', () => {
    render(<App />);
    const linkElement = screen.getByTestId(TestIds.headerAppBarTestId);
    expect(linkElement).toBeInTheDocument();
  });

  test(`renders the ${Home.name} view`, () => {
    render(<App />);
    const linkElement = screen.getByTestId(TestIds.homeViewComponent);
    expect(linkElement).toBeInTheDocument();
  });
});
