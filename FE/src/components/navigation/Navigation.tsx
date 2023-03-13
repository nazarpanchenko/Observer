import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useTheme,
  Grid,
  AppBar,
  Drawer,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import {
  MenuOpen,
  Close,
  StickyNote2Outlined,
  LocalActivityOutlined,
  ArchitectureOutlined,
  Logout,
} from '@mui/icons-material';

import { authService } from '../../services/index';
import './index.scss';

type NavItem = {
  name: string;
  path: string;
  icon: ReactElement<Element>;
};
type NavList = NavItem[];

const navList: NavList = [
  { name: 'Equipment', path: '/equipment', icon: <StickyNote2Outlined /> },
  { name: 'Reports', path: '/reports', icon: <LocalActivityOutlined /> },
  { name: 'Sessions', path: '/sessions', icon: <ArchitectureOutlined /> },
];

const Navigation: React.FC = (): ReactElement => {
  // const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(open);
    };

  const handleLogout = async (): Promise<void> => {
    await authService.logout();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'text.primary' }}>
      <Grid container justifyContent="space-between" alignContent="center" sx={{ p: 2 }}>
        <Grid item>
          <Button sx={{ color: '#fff' }} onClick={toggleDrawer(true)}>
            <MenuOpen sx={{ mr: 2 }} />
            <Typography fontWeight={900}>OBSERVER</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button color="inherit">
            <Logout onClick={handleLogout}>Logout</Logout>
          </Button>
        </Grid>
      </Grid>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {/* <Box
          sx={{
            width: 250,
            flexGrow: 1,
            p: 2,
            backgroundColor: theme.bg.danger,
            color: theme.text.color.danger,
          }}> */}
        <Box
          sx={{
            width: 250,
            flexGrow: 1,
            p: 2,
            backgroundColor: '#000',
            color: '#fff',
          }}
          role="presentation">
          <Close onClick={toggleDrawer(false)} />
          <List>
            {navList.map((el: NavItem) => (
              <ListItem key={el.name} disablePadding>
                <ListItemButton>
                  <Link className="sidebar-link" to={`${el.path}`}>
                    {el.icon}
                    <ListItemText primary={el.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navigation;
