import React from 'react';
import Grid from '@mui/material/Grid2';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS } from 'date-fns/locale';
import { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField'; // Used for renderInput

export interface Filters {
  startDate: Date | null;
  endDate: Date | null;
  region: string;
}

interface HeaderProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Header: React.FC<HeaderProps> = ({ filters, setFilters }) => {
  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    setFilters({ ...filters, region: event.target.value });
  };

  const handleStartDateChange = (newValue: Date | null) => {
    setFilters({ ...filters, startDate: newValue });
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setFilters({ ...filters, endDate: newValue });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <Grid
        component="form"
        container
        spacing={3}
        mb={4}
        direction="row"
        alignItems="center"
      >
        {/* Date Filters */}
        <Grid xs={12} md={6} component="div">
          <Grid container spacing={2}>
            <Grid xs={12} sm={6} component="div">
              <DatePicker
                label="Start Date"
                value={filters.startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid xs={12} sm={6} component="div">
              <DatePicker
                label="End Date"
                value={filters.endDate}
                onChange={handleEndDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Region Filter */}
        <Grid xs={12} md={6} component="div">
          <FormControl fullWidth>
            <InputLabel id="region-select-label">Region</InputLabel>
            <Select
              labelId="region-select-label"
              id="region-select"
              value={filters.region}
              label="Region"
              onChange={handleRegionChange}
            >
              <MenuItem value="All">All Regions</MenuItem>
              <MenuItem value="North">North</MenuItem>
              <MenuItem value="South">South</MenuItem>
              <MenuItem value="East">East</MenuItem>
              <MenuItem value="West">West</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

export default Header;