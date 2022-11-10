/* simple cart will be a list of unique item names in the cart */
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PieChartIcon from '@mui/icons-material/PieChart';// pies
import TravelExploreIcon from '@mui/icons-material/TravelExplore';// spies
//import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';// lies



export default function PermanentDrawerRight()
{
  const drawerWidth = 240;
  return (
    <Box sx={ { display: 'flex' } }>
      <Drawer
        sx={ {
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        } }
        variant="permanent"
        anchor="right"
        >
        
        <Toolbar>
          <Typography>
            Cart quick-view
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          { [ 'James Bond', 'Chicken Pot Pot', 'Austin Powers', ].map((text, index) => (
            <ListItem key={ text } disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  { index % 2 === 0 ? <TravelExploreIcon /> : <PieChartIcon /> }
                </ListItemIcon>
                <ListItemText primary={ text } />
              </ListItemButton>
            </ListItem>
          )) }
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
