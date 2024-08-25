import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const StyledAppBar = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#333333')};
  color: ${(props) => (props.theme === 'light' ? '#333333' : '#ffffff')};
  padding: 5px 0;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  /* Align items to center vertically */
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 30px;
  padding: 5px;
  font-size: 1.2rem;

  &.active {
    font-weight: bold;
  }
`;

const ToggleButton = styled.button`
  background-color: transparent;
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  border: solid 0.1px;
  background-color: #f8e773;
  border-radius: 8px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 40px;
`;

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledAppBar theme={theme}>
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Logo>ExploreX</Logo>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
          <StyledNavLink to="/contact">
            Contact Us
          </StyledNavLink>
          <StyledNavLink to="/contact/1" >
            Contact Details
          </StyledNavLink>
        </div>
        <ToggleButton onClick={toggleTheme} theme={theme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </ToggleButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
