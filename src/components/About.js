import React, { useContext } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import History from './about/History';
import Team from './about/Team';
import Values from './about/Values';
import Mission from './about/Mission';
import heroBackground from './images/jqy5c744.png';

const HeroSection = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
  padding-left: 20px;

  &.active {
    font-weight: bold;
    padding-right: 10px;
    border-bottom: 2px solid ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  }
`;

const HeroContent = styled.div`
  max-width: 100%;
  margin: 20px auto;
  padding: 0px;
  font-size: 1.3rem;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <HeroSection theme={theme}>
        <HeroContent>
          <h1>About Us</h1>
          <AboutContainer theme={theme}>
            <NavContainer>
              <StyledNavLink to="." end>
                History
              </StyledNavLink>
              <StyledNavLink to="mission">
                Mission
              </StyledNavLink>
              <StyledNavLink to="team">
                Team
              </StyledNavLink>
              <StyledNavLink to="values">
                Values
              </StyledNavLink>
            </NavContainer>
            <Routes>
              <Route path="/" element={<History />} />
              <Route path="mission" element={<Mission />} />
              <Route path="team" element={<Team />} />
              <Route path="values" element={<Values />} />
            </Routes>
          </AboutContainer>
        </HeroContent>
      </HeroSection>
    </ThemeProvider>
  );
};

export default About;
