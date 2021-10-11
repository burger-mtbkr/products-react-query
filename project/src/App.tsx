import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Routes from './routes/Routes';

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <header className="App-header" />
        <Routes />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
