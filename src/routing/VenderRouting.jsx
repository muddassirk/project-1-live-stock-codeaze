import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SyncIcon from '@mui/icons-material/Sync';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';

import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import dummy from '../assets/download.png'
import Card from '../components/UI/Vender/Card'
import VenderProfile from '../components/Vender/VenderProfile';
import VenderDashboard from '../components/Vender/VenderDashboard';
import VenderDetail from '../components/Vender/VenderDetail';
import VenderUpdateBidding from '../components/Vender/VenderUpdateBidding';
import VenderWallet from '../components/Vender/VenderWallet';
import VenderNotification from '../components/Vender/VenderNotification';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: '10% !important',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '48ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function VenderRouting() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar style={{ backgroundColor: '#008B8B' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {/* Mini variant drawer */}
            </Typography>
            <Typography variant="h4" noWrap component="div">
              {/* <CircleNotificationsRoundedIcon /> */}
              <NotificationsIcon />
            </Typography>
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Typography variant="h6" noWrap component="div" className='d-flex justify-content-center align-items-center mx-auto'>
              <p className='px-1'>
                <LanguageIcon />
              </p>

              <p className='px-1'>
                English
              </p>
            </Typography>
            <Typography variant="h6" noWrap component="div" className='d-flex justify-content-center align-items-center mx-auto'>
              <p className='px-1'>
                <AccountCircleIcon />
              </p>
              <p className='px-1'>
                Fayaz Khan
              </p>
            </Typography>
            <Typography variant="h6" noWrap component="div" className='d-flex justify-content-center align-items-center mx-auto'>
              <p className='px-1'>
                <Link to='/login' className='vender-routing-link'>
                  Login
                </Link>
              </p>
              <p className='px-1'>
                <Link to='/signup' className='vender-routing-link'>
                  Signup
                </Link>
              </p>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} style={{ backgroundColor: '#B11E24' }} >
          <div className='' style={{ backgroundColor: '#B11E24' }} className='text-white'>
            <DrawerHeader style={{ backgroundColor: '#B11E24' }}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            {/* <Divider /> */}
            <h4 className='text-center my-3'>Logo</h4>
            {/* <div className='d-flex w-100 my-4 mx-auto justify-content-center'> */}
            <div className='d-flex w-100 my-4 mx-auto justify-content-center'>
              <div className='col-sm-3 w-25' >
                <img src={dummy} className='w-100 rounded-circle' alt="" />
              </div>
            </div>
            {/* <div className='col-sm-3 my-2 d-flex align-items-center justify-content-center'> */}
            <div className='text-center'>
              <div>
                <div>
                  <small>Fayaz Khan</small>
                </div>
                <div>
                  <small>$000</small>
                </div>
              </div>
            </div>
            {/* </div> */}

            <Divider />
            <List >
              <ListItem button>
                <ListItemIcon>
                  <Link to='/' className='vender-routing-link'>
                    <IconButton className='text-white'>
                      <HomeIcon />
                    </IconButton>
                    <ListItemText className='px-3' primary='Dashboard' />
                  </Link>
                </ListItemIcon>
              </ListItem>
            </List>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Link to='/vender-profile' className='vender-routing-link'>
                    <IconButton className='text-white'>
                      <PersonIcon />
                    </IconButton>
                    <ListItemText className='px-3' primary='My Profile' />
                  </Link>
                </ListItemIcon>
              </ListItem>
            </List>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Link to='/vender-wallet' className='vender-routing-link'>
                    <IconButton className='text-white'>
                      <AccountBalanceWalletIcon />
                    </IconButton>
                    <ListItemText className='px-3' primary='Wallet' />
                  </Link>
                </ListItemIcon>
              </ListItem>
            </List>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Link to='/vender-details' className='vender-routing-link'>
                    <IconButton className='text-white'>
                      <AddBoxIcon />
                    </IconButton>
                    <ListItemText className='px-3' primary='Vender Details' />
                  </Link>
                </ListItemIcon>
              </ListItem>
            </List>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Link to='/vender-updateBidding' className='vender-routing-link'>
                    <IconButton className='text-white'>
                      <SyncIcon />
                    </IconButton>
                    <ListItemText className='px-3' primary='Update and Delete' />
                  </Link>
                </ListItemIcon>
              </ListItem>
            </List>

            <Divider />
          </div>

        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader className='p-0 m-0' />
          {/* <VenderProfile /> */}
          <Switch>
            <Route exact path='/'>
              <VenderDashboard />
            </Route>
            <Route path='/vender-profile'>
              <VenderProfile />
            </Route>
            <Route path='/vender-notification'>
              <VenderNotification />
            </Route>
            <Route path='/vender-details'>
              <VenderDetail />
            </Route>
            <Route path='/vender-updateBidding'>
              <VenderUpdateBidding />
            </Route>
            <Route path='/vender-wallet'>
              <VenderWallet />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router >
  );
}