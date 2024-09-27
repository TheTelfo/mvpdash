import React, { useContext } from 'react';
import { PanelContext } from '../../context/PanelContext';
import { Button } from '@mui/material';

const WidgetContainer: React.FC = () => {
  const { toggleRightPanel } = useContext(PanelContext);

  return (
    <Button variant="contained" onClick={toggleRightPanel}>
      Toggle Right Panel
    </Button>
  );
};

export default WidgetContainer;
