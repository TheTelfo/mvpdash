import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import {
  Dashboard,
  DataUsage,
  Build,
  Layers,
  Explore,
  Description,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

export const drawerWidth = 240; // Exported for use in other components

const navItems = [
  { text: 'Overview', icon: <Dashboard />, path: '/overview' },
  { text: 'Data', icon: <DataUsage />, path: '/data' },
  { text: 'Framework', icon: <Build />, path: '/framework' },
  // Add more navigation items as needed
];

interface SidebarProps {
  open: boolean;
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, collapsed, toggleSidebar }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: collapsed ? drawerWidth / 8 : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? drawerWidth / 8 : drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
        },
      }}
    >
      <Box display="flex" alignItems="center" justifyContent={collapsed ? 'center' : 'flex-end'} p={1}>
        <IconButton onClick={toggleSidebar}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: collapsed ? 2.5 : 3,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 'auto' : 3,
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
