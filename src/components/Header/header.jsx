import AppBar from '@mui/material/AppBar';
import ShopIcon from '@mui/icons-material/Shop';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeButton from './ThemeButton/themeButton';
import CartButton from './ShoppingCartButton/cartButton';
import './header.scss';
import {Divider} from './@mui/material/'

function Header(props)
{
  return (
    <AppBar position="relative">
      <Toolbar>
        <ShopIcon sx={ { mr: 2 } } />
        <Divider />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
        >
          I Think You Want To Buy Things From Me :>
        </Typography>
        <div className='navLeftButtons'>
          <ThemeButton />
          <CartButton />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
