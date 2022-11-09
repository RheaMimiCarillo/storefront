import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './context/ThemeContext/themeContext' // custom MUI theme context
import CssBaseline from '@mui/material/CssBaseline'; // normalizes/resets most css defaults, except some useful ones

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <CssBaseline enableColorScheme />
      <App />
    </Theme>
  </React.StrictMode>
);
