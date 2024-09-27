// src/components/layout/RightPanel.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  Typography,
  Card,
  CardContent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
} from '@mui/material';
import { PanelContext } from '../../context/PanelContext';
import { drawerWidth } from './Sidebar';
import { useLocation } from 'react-router-dom';
import { dummyKPIs } from '../../data/FrameData';

interface RightPanelProps {
  selectedKPIs: string[];
  setSelectedKPIs: (kpis: string[]) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedKPIs, setSelectedKPIs }) => {
  const currentWidget = useSelector((state: RootState) => state.widgets.currentWidget);
  const { rightPanelOpen } = React.useContext(PanelContext);
  const location = useLocation();

  const handleKPIChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedKPIs(typeof value === 'string' ? value.split(',') : value);
  };

  if (!rightPanelOpen) {
    return null;
  }

  const renderContent = () => {
    if (location.pathname === '/framework') {
      return (
        <FormControl fullWidth>
          <InputLabel id="kpi-multi-select-label">Select KPI Models</InputLabel>
          <Select
            labelId="kpi-multi-select-label"
            multiple
            value={selectedKPIs}
            onChange={handleKPIChange}
            input={<OutlinedInput label="Select KPI Models" />}
            renderValue={(selected: string[]) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {dummyKPIs.map((kpi) => (
              <MenuItem key={kpi} value={kpi}>
                {kpi}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    } else if (currentWidget) {
      return (
        <Card>
          <CardContent>
            <Typography variant="body1">Type: {currentWidget.type}</Typography>
          </CardContent>
        </Card>
      );
    } else {
      return <Typography variant="body1">No tools available for this page.</Typography>;
    }
  };

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: '#fff',
        boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: '64px',
        right: 0,
        bottom: 0,
        overflowY: 'auto',
        zIndex: 1200,
      }}
    >
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          {currentWidget ? `${currentWidget.name} Details` : 'Tools'}
        </Typography>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default RightPanel;