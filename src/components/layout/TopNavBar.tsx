// src/components/layout/TopNavBar.tsx
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PanelContext } from '../../context/PanelContext';

interface TopNavBarProps {
  toggleSidebar: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ toggleSidebar }) => {
  const { toggleRightPanel } = React.useContext(PanelContext);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bend Logic Demo
        </Typography>
        <Button color="inherit" onClick={toggleRightPanel}>
          Toggle Right Panel
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
