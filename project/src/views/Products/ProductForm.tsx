import { TextField, Button, Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Product, productSchema } from 'src/models';
import { getEditProduct } from 'src/selectors';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { setHeaderTitle } from 'src/actions';

const ProductForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector(getEditProduct);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(productSchema),
  });

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(setHeaderTitle('Product details'));
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justifyContent="center" spacing={1}>
        <input type="hidden" value={product.id} {...register('id')} />
        <Grid item xs={6} marginY={2}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            defaultValue={product.name}
            InputLabelProps={{ shrink: true }}
            error={errors.name !== undefined}
            helperText={errors.name?.message}
            {...register('name', { required: true, maxLength: 20 })}
          />
        </Grid>
        <Grid item xs={6} marginY={2}>
          <TextField
            type="text"
            label="Category"
            variant="outlined"
            defaultValue={product.category}
            InputLabelProps={{ shrink: true }}
            error={errors.category !== undefined}
            helperText={errors.category?.message}
            {...register('category', { required: true, maxLength: 20 })}
          />
        </Grid>
        <Grid item xs={6} marginY={2}>
          <TextField
            type="number"
            label="Price"
            variant="outlined"
            defaultValue={product.price}
            InputLabelProps={{ shrink: true }}
            inputProps={{
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
            error={errors.price !== undefined}
            helperText={errors.price?.message}
            {...register('price', { required: true })}
          />
        </Grid>
        <Grid
          container
          xs={12}
          spacing={2}
          marginY={2}
          direction="row"
          justifyContent="center"
        >
          <Grid item>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" type="reset">
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                dispatch(setHeaderTitle('Product list'));
                history.replace('/');
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default ProductForm;
