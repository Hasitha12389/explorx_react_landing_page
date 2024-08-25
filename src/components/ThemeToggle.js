import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton edge="end" color="inherit" onClick={toggleTheme}>
      {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}                
    </IconButton>
  );
};

export default ThemeToggle;
