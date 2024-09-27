import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS } from 'date-fns/locale';

interface HeaderProps {
  filters: any;
  setFilters: (filters: any) => void;
}

const Header: React.FC<HeaderProps> = ({ filters, setFilters }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Framework</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <DatePicker
              label="Start Date"
              value={filters.startDate}
              onChange={(newValue) => setFilters({ ...filters, startDate: newValue })}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>
          <Grid item>
            <DatePicker
              label="End Date"
              value={filters.endDate}
              onChange={(newValue) => setFilters({ ...filters, endDate: newValue })}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default Header;