import { TextField, Button, Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { IProductSaveResponse, Product, productSchema } from 'src/models';
import { getEditProduct } from 'src/selectors';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { setHeaderTitle } from 'src/actions';
import { useMutation } from 'react-query';
import { saveProduct } from 'src/api';

const ProductForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mutation = useMutation(saveProduct);

  let productToSave = useSelector(getEditProduct);

  if (!productToSave) {
    productToSave = {
      name: '',
      category: '',
      price: 0,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: yupResolver(productSchema),
  });

  const onSubmit: SubmitHandler<Product> = async (p: Product) => {
    const { isSuccessful, error }: IProductSaveResponse =
      await mutation.mutateAsync(p);
    if (isSuccessful) {
      history.push('/');
    } else {
      alert(error?.message);
    }
  };

  useEffect(() => {
    dispatch(setHeaderTitle('Product details'));
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justifyContent="center" spacing={1}>
        {productToSave.id && (
          <input type="hidden" value={productToSave.id} {...register('id')} />
        )}
        <Grid item xs={6} marginY={2}>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            defaultValue={productToSave.name}
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
            defaultValue={productToSave.category}
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
            defaultValue={productToSave.price}
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
