import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModalOpen } from 'src/actions';
import { getSelectedProducts } from 'src/selectors';
import DeletePromptModal from './DeletePromptModal';

const ProductTableToolbar = () => {
  const dispatch = useDispatch();
  const selectedProducts = useSelector(getSelectedProducts);

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(selectedProducts.length > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity,
              ),
          }),
        }}
      >
        {selectedProducts.length > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selectedProducts.length} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Products
          </Typography>
        )}
        {selectedProducts.length === 1 && (
          <Tooltip title="Edit">
            <IconButton>
              <EditIcon />
            </IconButton>
          </Tooltip>
        )}

        {selectedProducts.length > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={() => dispatch(setDeleteModalOpen(true))}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Add">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <DeletePromptModal />
    </>
  );
};

export default ProductTableToolbar;
