import Container from '@mui/material/Container';
import ProductList from '../components/Products/ProductTable/ProductTable';

const Home = (): JSX.Element => (
  <Container maxWidth="lg">
    <ProductList />
  </Container>
);

export default Home;
