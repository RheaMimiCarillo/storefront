import { connect } from 'react-redux';
import { Button, Stack, Box, Typography, Container } from '@mui/material/';


function ActiveCategory(props)
{
  return (
    <Box
      sx={ {
        pt: 8,
        pb: 6,
      } }
    >
      <Container maxWidth="sm">
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {props.activeCategory.display}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {props.activeCategory.description}
        </Typography>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  activeCategory: state.activeCategory
});

export default connect(mapStateToProps)(ActiveCategory);
