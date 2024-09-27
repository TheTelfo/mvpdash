import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { drawerWidth } from './Sidebar';

interface MainContentProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  collapsed: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ children, sidebarOpen, collapsed }) => {
  const computeMarginLeft = () => {
    if (!sidebarOpen) return 0;
    return collapsed ? `${drawerWidth / 8}px` : `${drawerWidth}px`; // Adjust as needed
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: computeMarginLeft(),
        transition: 'margin-left 0.3s',
        width: '100%',
      }}
    >
      <Toolbar /> {/* Ensures content starts below TopNavBar */}
      {children}
    </Box>
  );
};

export default MainContent;
