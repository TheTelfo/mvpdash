// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppRoutes from './routes';
import MainContent from './components/layout/MainContent';
import TopNavBar from './components/layout/TopNavBar';
import Sidebar, { drawerWidth } from './components/layout/Sidebar';
import RightPanel from './components/layout/RightPanel';
import { PanelProvider } from './context/PanelContext';
import { Box } from '@mui/material';
import ErrorBoundary from './components/common/ErrorBoundary';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!sidebarOpen) {
      setCollapsed(false);
    }
  };

  const toggleSidebarCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ErrorBoundary>
    <PanelProvider>
      <Router>
        <DndProvider backend={HTML5Backend}>
          <TopNavBar toggleSidebar={toggleSidebar} />
          <Box display="flex" height="calc(100vh - 64px)" bgcolor="#f5f5f5">
            <Sidebar
              open={sidebarOpen}
              onToggle={toggleSidebarCollapse}
              drawerWidth={drawerWidth}
              collapsed={collapsed}
            />
            <MainContent sidebarOpen={sidebarOpen} collapsed={collapsed}>
              <AppRoutes />
            </MainContent>
            <RightPanel selectedKPIs={[]} setSelectedKPIs={() => {}} />
          </Box>
        </DndProvider>
      </Router>
    </PanelProvider>
    </ErrorBoundary>
  );
};

export default App;