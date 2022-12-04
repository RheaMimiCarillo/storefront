import { connect } from 'react-redux';
import { chooseCategory } from '../../store/categories'
import { Card, CardContent, CardMedia, Grid, Typography, Container, CardActionArea } from '@mui/material';

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
            <Grid item key={ idx } xs={ 12 } sm={ 6 } md={ 4 } sx={ { display: 'flex' } } >
              <CardActionArea onClick={ () => props.chooseCategory(category.normalized) }>
                <Card
                  sx={ {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  } }
                >
                  <CardContent sx={ { flexGrow: 1 } }>
                    <Typography variant="h5" component="h2">
                      { category.display }
                    </Typography>

                  </CardContent>
                  <CardMedia
                    component="img"
                    image={ category.image }
                    alt={ category.display }
                    sx={{height: '100%'}}
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
