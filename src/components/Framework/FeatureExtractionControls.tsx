import React from 'react';
import { Box, Button, CircularProgress } from '@mui/material';

interface FeatureExtractionControlsProps {
  isExtracting: boolean;
  onRunExtraction: () => void;
}

const FeatureExtractionControls: React.FC<FeatureExtractionControlsProps> = ({ isExtracting, onRunExtraction }) => {
  return (
    <Box display="flex" alignItems="center">
      <Button variant="contained" onClick={onRunExtraction} disabled={isExtracting}>
        Run Feature Extraction
      </Button>
      {isExtracting && <CircularProgress size={24} />}
    </Box>
  );
};

export default FeatureExtractionControls;