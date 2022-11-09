import { connect } from 'react-redux';
import { chooseCategory } from '../../store/categories'
import { List, ListItem, ListItemButton } from '@mui/material';

function Categories(props)
{
  return (
    <List>
      { props.categories.map((category, idx) => (
        <ListItem key={ idx }>
          <ListItemButton onClick={ () => props.chooseCategory(category.normalized) }>
            { category.display }
          </ListItemButton>
        </ListItem>
      )) }
    </List>
  )
}

// consume store, so we can the 'state' in store as 'props
const mapStateToProps = (state) => ({
  categories: state.categories,
  activeCategory: state.activeCategory,
});

const mapDispatchToProps =
{
  chooseCategory,
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
