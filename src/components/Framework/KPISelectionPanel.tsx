import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface KPISelectionPanelProps {
  availableKPIs: string[];
  selectedKPIs: string[];
  setSelectedKPIs: (kpi: string[]) => void;
}

const KPISelectionPanel: React.FC<KPISelectionPanelProps> = ({ availableKPIs, selectedKPIs, setSelectedKPIs }) => {
  const handleKPIChange = (kpi: string, checked: boolean) => {
    if (checked) {
      setSelectedKPIs([...selectedKPIs, kpi]);
    } else {
      setSelectedKPIs(selectedKPIs.filter(item => item !== kpi));
    }
  };

  return (
    <Box>
      <FormGroup>
        {availableKPIs.map((kpi) => (
          <FormControlLabel
            control={<Checkbox checked={selectedKPIs.includes(kpi)} onChange={(e) => handleKPIChange(kpi, e.target.checked)} />}
            label={kpi}
            key={kpi}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default KPISelectionPanel;