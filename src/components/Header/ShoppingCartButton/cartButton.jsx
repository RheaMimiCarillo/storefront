//import { If, Then, Else } from 'react-if';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

function CartButton()
{
  return (
    // will update the badgeContent as it becomes necessary
    // NOTES: `The badge hides automatically when badgeContent is zero`
    <IconButton 
      color="inherit">
      <Badge badgeContent={ 4 } color="secondary" max={ 999 }>
        <ShoppingCartIcon color="inherit" />
      </Badge>
    </IconButton>
  )
}

export default CartButton;
