import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@mui/material';

interface ModelMappingInterfaceProps {
  onDropKPI: (item: any) => void;
}

const ModelMappingInterface: React.FC<ModelMappingInterfaceProps> = ({ onDropKPI }) => {
  const [, drop] = useDrop(() => ({
    accept: 'KPI',
    drop: (item: any) => onDropKPI(item),
  }));

  return (
    <Box ref={drop} p={2} bgcolor="background.paper" minHeight={300}>
      Drag KPIs here to map to models
    </Box>
  );
};

export default ModelMappingInterface;