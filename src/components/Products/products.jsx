import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Products(props)
{
  return (
    <Container sx={ { py: 8 } } maxWidth="lg">
      <Grid container spacing={ 4 }>
        { props.products.filter(product =>
          product.category === props.activeCategory.normalized
        ).map((product, idx) =>
          <Grid item key={ idx } xs={ 12 } sm={ 6 } md={ 4 }>
            <Card
              sx={ {
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              } }
            >
              <CardMedia
                component="img"
                sx={ {
                  // 16:9
                  pt: '56.25%',
                } }
                image={ product.image }
                alt={ product.name }
              />
              <CardContent sx={ { flexGrow: 1 } }>
                <Typography gutterBottom variant="h5" component="h2">
                  { product.name }
                </Typography>
                <Typography>
                  { product.description }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          </Grid>
        )
        }
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  activeCategory: state.activeCategory
});

export default connect(mapStateToProps)(Products);
