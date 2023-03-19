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
  const theme = useTheme();
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
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Button onClick={toggleDrawer(true)}>
          <MenuOpen sx={{ mr: 2, color: theme.text.color.success }} />
          <Typography
            variant="caption"
            sx={{ color: theme.text.color.success }}
            fontWeight={theme.text.font.weight.extra_bold}
            fontStyle={theme.text.font.style.oblique}>
            OBSERVER
          </Typography>
        </Button>

        <Button>
          <Logout sx={{ color: theme.text.color.success }} onClick={handleLogout}>
            Logout
          </Logout>
        </Button>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            p: 2,
            backgroundColor: theme.bg.secondary,
          }}
          flexGrow={1}
          width={250}
          color={theme.text.color.success}
          fontWeight={theme.text.font.weight.extra_bold}
          role="presentation">
          <Close onClick={toggleDrawer(false)} />
          <List>
            {navList.map((el: NavItem) => (
              <ListItem key={el.name} disablePadding>
                <ListItemButton sx={{ color: theme.text.color.info }}>
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
