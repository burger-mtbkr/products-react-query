import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from '../logo.svg';

const Home = (): JSX.Element => (
  <Container maxWidth="lg">
    <Paper>
      <div>
        <Typography gutterBottom variant="subtitle1">
          Welcome!
        </Typography>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Products app example reactQuery</p>
      </div>
    </Paper>
  </Container>
);

export default Home;
