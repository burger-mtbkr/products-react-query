import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material';
import Routes from './routes/Routes';
import Header from './components/Header/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes />
        </QueryClientProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
