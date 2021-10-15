import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Product } from 'src/models';
import { getEditProduct } from 'src/selectors';

const ProductForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();
  const product = useSelector(getEditProduct);

  const onSubmit: SubmitHandler<Product> = (data: Product) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="hidden"
        label="Name"
        variant="outlined"
        value={product.id}
        {...register('id', { required: true })}
      />
      <TextField
        type="text"
        label="Name"
        variant="outlined"
        defaultValue={product.name}
        {...register('name', { required: true, maxLength: 20 })}
      />
      <p>{errors.name?.type === 'required' && 'Name is required'}</p>
      <TextField
        type="text"
        label="Category"
        variant="outlined"
        defaultValue={product.category}
        {...register('category', { required: true, maxLength: 20 })}
      />
      <p>{errors.category?.type === 'required' && 'Category is required'}</p>
      <TextField
        type="number"
        label="Price"
        variant="outlined"
        defaultValue={product.price}
        {...register('price', { required: true })}
      />
      <p>{errors.price?.type === 'required' && 'Price is required'}</p>
      <input type="submit" />
      <input type="reset" />
    </form>
  );
};
export default ProductForm;
