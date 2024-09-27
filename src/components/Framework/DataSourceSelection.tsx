import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

interface DataSourceSelectionProps {
  dataSources: { name: string; health: string }[];
  selectedDataSources: string[];
  setSelectedDataSources: (sources: string[]) => void;
}

const DataSourceSelection: React.FC<DataSourceSelectionProps> = ({ dataSources, selectedDataSources, setSelectedDataSources }) => {
  const handleDataSourceChange = (source: string, checked: boolean) => {
    if (checked) {
      setSelectedDataSources([...selectedDataSources, source]);
    } else {
      setSelectedDataSources(selectedDataSources.filter(item => item !== source));
    }
  };

  return (
    <Box>
      <FormGroup>
        {dataSources.map((source) => (
          <FormControlLabel
            control={<Checkbox checked={selectedDataSources.includes(source.name)} onChange={(e) => handleDataSourceChange(source.name, e.target.checked)} />}
            label={<Typography>{source.name} - {source.health}</Typography>}
            key={source.name}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default DataSourceSelection;