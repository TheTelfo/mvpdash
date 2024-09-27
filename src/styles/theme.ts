// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize your primary color
    },
    secondary: {
      main: '#dc004e', // Customize your secondary color
    },
    // Add more palette options as needed
  },
  typography: {
    // Customize typography
    h4: {
      fontWeight: 600,
    },
    // Add more typography variants as needed
  },
  // Add more theme customizations as needed
});

export default theme;