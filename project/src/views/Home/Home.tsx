import Container from '@mui/material/Container';
import { TestIds } from 'src/utils';
import ProductList from 'src/components/Products/ProductTable/ProductTable';

const Home = (): JSX.Element => (
  <Container maxWidth="lg" data-testid={TestIds.homeViewComponent}>
    <ProductList />
  </Container>
);

export default Home;
