import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import { TestIds } from 'src/utils/testId.util';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './Header';

test('renders welcome test', () => {
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

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>
    </Provider>,
  );
  const linkElement = screen.getByTestId(TestIds.headerAppBarTestId);
  expect(linkElement).toBeInTheDocument();
});
