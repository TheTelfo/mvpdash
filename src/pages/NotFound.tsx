import React from 'react';
import { Typography, Container } from '@mui/material';

const NotFound: React.FC = () => (
  <Container>
    <Typography variant="h4" align="center" mt={5}>
      404 - Page Not Found
    </Typography>
  </Container>
);

export default NotFound;