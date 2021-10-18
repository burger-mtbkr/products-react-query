import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductTable from 'src/components/Products/ProductTable/ProductTable';
import { store } from 'src/redux/store';
import { TestIds } from 'src/utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';

describe(`${Home.name} tests`, () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

  test(`renders the ${Home.name} view`, () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </Provider>,
    );
    const linkElement = screen.getByTestId(TestIds.homeViewComponent);
    expect(linkElement).toBeInTheDocument();
  });
  test(`renders the ${ProductTable.name} view`, () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ProductTable />
        </QueryClientProvider>
      </Provider>,
    );
    const linkElement = screen.getByTestId(TestIds.productTable);
    expect(linkElement).toBeInTheDocument();
  });
});
