import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Menu, MenuItem } from '@mui/material';

const menu = [
    {
        id: 1,
        title: "Mantras",
        link: "/about",
        menu: [
            {
                id: 1,
                title: "Durga Mantras",
                link: "/about",
            },
            {
                id: 2,
                title: "Shiv Mantras",
                link: "/about",
            },
            {
                id: 3,
                title: "Hindu Mantras",
                link: "/about",
            },
            {
                id: 4,
                title: "Vedic Mantras",
                link: "/about",
            },
            {
                id: 5,
                title: "Navgrah Mantras",
                link: "/about",
            },
            {
                id: 6,
                title: "Sanskrit Mantras",
                link: "/about",
            },
            {
                id: 7,
                title: "Mantra Meditation",
                link: "/about",
            },
            {
                id: 8,
                title: "Om Mantra",
                link: "/about",
            },
            {
                id: 9,
                title: "Bij Mantras",
                link: "/about",
            },
            {
                id: 10,
                title: "MQ Newsletter",
                link: "/about",
            }
        ]
    },
    {
        id: 2,
        title: "Keep in touch",
        link: "/about",
        menu: [
            {
                id: 1,
                title: "MQ Blog",
                link: "/about",
            },
            {
                id: 2,
                title: "Contact Us",
                link: "/about",
            },
            {
                id: 3,
                title: "About Us",
                link: "/about",
            }
        ]
    },
    {
        id: 3,
        title: "Audio Mantra Library",
        link: "/about"
    }
]

export default function MainAppbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: {sm: "block", md: "none"} }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: {sm: "1", md: "0"} }}>
            MantraQuest
          </Typography>
          <Box sx={{px: 5, display: {sm: "none", md: "block"}, flexGrow: {sm: "0", md: "1"}}}>
              {menu && menu.map(m=>{
                  if(m.menu){
                      return (
                      <React.Fragment>
                      <Button key={m.id} color="inherit" onClick={handleClick}>{m.title}<KeyboardArrowDownIcon /></Button> 
                      <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      >
                          {m.menu.map(m2=>{
                              return <MenuItem key={m2.id}>{m2.title}</MenuItem>
                          })}
                          
                      </Menu>
                      </React.Fragment>
                      )
                  }
                  return (
                  <Button key={m.id} color="inherit">{m.title}</Button> 
                  )
              })}   
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
