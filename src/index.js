import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ThemeProvider from './context/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);