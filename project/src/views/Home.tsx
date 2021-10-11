import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from '../logo.svg';
import './Home.css';

const Home = (): JSX.Element => (
  <Container maxWidth="lg">
    <Paper>
      <div className="App">
        <Typography gutterBottom variant="subtitle1">
          Welcome!
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />

        <Typography gutterBottom variant="subtitle1">
          Products app example reactQuery
        </Typography>
      </div>
    </Paper>
  </Container>
);

export default Home;
