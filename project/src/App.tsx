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
        <div className="App">
          <header className="App-header" />
          <Routes />
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
