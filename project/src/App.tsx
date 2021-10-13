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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
