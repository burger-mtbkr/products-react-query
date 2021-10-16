import { render, screen } from '@testing-library/react';
import ProductTable from 'src/components/Products/ProductTable/ProductTable';
import { TestIds } from 'src/utils';
import Home from './Home';

describe(`${Home.name} tests`, () => {
  test(`renders the ${Home.name} view`, () => {
    render(<Home />);
    const linkElement = screen.getByTestId(TestIds.homeViewComponent);
    expect(linkElement).toBeInTheDocument();
  });
  test(`renders the ${ProductTable.name} view`, () => {
    render(<ProductTable />);
    const linkElement = screen.getByTestId(TestIds.productTable);
    expect(linkElement).toBeInTheDocument();
  });
});
