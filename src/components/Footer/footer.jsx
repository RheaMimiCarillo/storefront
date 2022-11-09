import { Box, Typography } from '@mui/material/';
import Copyright from "./copyright";
import './footer.scss';

function Footer(props)
{
  return (
    <Box component="footer">
      <Typography
        variant="h6"
        align="center"
        gutterBottom
      >
        You're my best friend
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Thanks for coming!
      </Typography>
      <Copyright />
    </Box>
  )
}

export default Footer;
