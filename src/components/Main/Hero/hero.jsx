import { Button, Stack, Box, Typography, Container } from '@mui/material/';

function Hero()
{
  return (
    <Box
      sx={ {
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      } }
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          How open-minded are you...
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary" 
          paragraph
        >
          How would you feel to have your money worries behind you? 
          Just imagine the look on your kids' faces when they see you become the pie millionaire. 
          Most people don't have the courage, but I bet you're a bit like me. 
          Buy my pies; enrich our lives!
        </Typography>
        <Stack
          sx={ { pt: 4 } }
          direction="row"
          spacing={ 2 }
          justifyContent="center"
        >
          <Button disabled={true} variant="contained">It's not a pyramid-scheme</Button>
          <Button disabled={true} variant="outlined">I Swear!</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero;
