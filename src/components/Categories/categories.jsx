import { connect } from 'react-redux';
import { chooseCategory } from '../../store/categories'
import { List, ListItem, ListItemButton, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, CardActionArea } from '@mui/material';

function Categories(props)
{
  return (
    <>
      <Container sx={ { py: 8 } } maxWidth="md">
        <Typography gutterBottom variant="h3" component="h2">
          Shop by category
        </Typography>
        <Grid container spacing={ 4 }>
          { props.categories.map((category, idx) =>
            <Grid item key={ idx } xs={ 12 } sm={ 6 } md={ 4 }>
              <CardActionArea>
                <Card
                  sx={ {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  } }
                >
                  <CardContent sx={ { flexGrow: 1 } }>
                    <Typography gutterBottom variant="h5" component="h2">
                      { category.display }
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={ {
                      // 16:9
                      pt: '56.25%',
                    } }
                    image={ category.image }
                    alt={ category.display }
                  />
                </Card>
              </CardActionArea>
            </Grid>
          )
          }
        </Grid>
      </Container>
    </>
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
