import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.scss';

import App from './App';

const rootNode = document.getElementById('root') as HTMLElement;
createRoot(rootNode).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
