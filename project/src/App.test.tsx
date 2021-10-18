import { render, screen } from '@testing-library/react';
import Home from 'src/views/Home/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import App from './App';
import Header from './components/Header/Header';
import { TestIds } from './utils';

describe(`${Header.name} tests`, () => {
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
  test('renders App Header', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>,
    );
    const linkElement = screen.getByTestId(TestIds.headerAppBarTestId);
    expect(linkElement).toBeInTheDocument();
  });

  test(`renders the ${Home.name} view`, () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>,
    );
    const linkElement = screen.getByTestId(TestIds.homeViewComponent);
    expect(linkElement).toBeInTheDocument();
  });
});
