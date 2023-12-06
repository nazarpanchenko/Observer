import React, { FC, ReactElement, KeyboardEvent, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useTheme,
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
  MenuOpenOutlined,
  ArrowCircleLeftRounded,
  StickyNote2Outlined,
  LocalActivityOutlined,
  ArchitectureOutlined,
  Logout,
} from '@mui/icons-material';

import { authService } from 'Services';
import './index.scss';

type NavItem = {
  name: string;
  path: string;
  icon: ReactElement<Element>;
};
type NavList = NavItem[];

const Navigation: FC = (): ReactElement => {
  const theme = useTheme();

  const navList: NavList = [
    {
      name: 'Sessions',
      path: '/sessions',
      icon: <ArchitectureOutlined sx={{ color: theme.text.color.success }} />,
    },
    {
      name: 'Reports',
      path: '/reports',
      icon: <LocalActivityOutlined sx={{ color: theme.text.color.success }} />,
    },
    {
      name: 'Equipment',
      path: '/equipment',
      icon: <StickyNote2Outlined sx={{ color: theme.text.color.success }} />,
    },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleLogout = async (): Promise<void> => {
    await authService.logout();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme.bg.secondary }}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={toggleDrawer(true)}>
            <MenuOpenOutlined sx={{ mr: 1, color: theme.text.color.success }} />
          </Button>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.text.color.success }}
            fontWeight={theme.text.fontWeight.extra_bold}
            fontStyle={theme.text.fontStyle.oblique}>
            OBSERVER
          </Typography>
        </Box>

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
          width={250}
          flexGrow={1}
          color={theme.text.color.success}
          fontWeight={theme.text.fontWeight.extra_bold}
          role="presentation">
          <ArrowCircleLeftRounded
            sx={{ color: theme.text.color.success }}
            onClick={toggleDrawer(false)}
          />
          <List>
            {navList.map((el: NavItem) => (
              <ListItem key={el.name} disablePadding>
                <ListItemButton sx={{ color: theme.text.color.success }}>
                  <Link className="navbar-link" to={`${el.path}`}>
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
