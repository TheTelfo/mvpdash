import React from 'react';
import { Box, Button } from '@mui/material';

interface ActionButtonsProps {
  onSave: () => void;
  onRun: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onSave, onRun }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Button variant="contained" color="primary" onClick={onSave}>
        Save KPI Model
      </Button>
      <Button variant="contained" color="secondary" onClick={onRun}>
        Run Model
      </Button>
    </Box>
  );
};

export default ActionButtons;