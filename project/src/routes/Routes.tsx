import { Switch, Route } from 'react-router-dom';
import ProductForm from 'src/views/Products/ProductForm';
import Home from 'src/views/Home/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/add">
      <ProductForm />
    </Route>
    <Route exact path="/edit">
      <ProductForm />
    </Route>
  </Switch>
);

export default Routes;
