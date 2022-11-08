import { connect } from 'react-redux';
import List from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';


function Categories(props)
{
  return (
    <List>
      { props.categories.map((category, idx) => (
        <ListItem key={ idx }>
          { category }
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
export default connect(mapStateToProps)(Categories);
