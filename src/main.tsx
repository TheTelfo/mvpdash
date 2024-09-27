// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './styles/globals.css'; // Updated to reflect removal of Tailwind
import { registerAgGridModules } from './utils/agGridModules';

registerAgGridModules();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
