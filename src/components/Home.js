import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Imported useNavigate for navigation
import heroBackground from './images/jqy5c744.png'; // Imported background image
import { ThemeContext } from '../context/ThemeContext'; 
import History from './about/History';

const HeroSection = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#000')};
`;

const HeroContent = styled.div`
  max-width: 75%;
  margin: 0px auto;
  padding: 0px;
  font-size: 1rem;
`;

const CallToActionButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`;

const StyledParagraph = styled.p`
  padding-left: 75px;
  padding-right: 75px;
  font-size: 1.2rem;
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#000')};
`;

const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#000')};
`;

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [welcomeMessage, setWelcomeMessage] = useState('Welcome!');
  const [name, setName] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setWelcomeMessage(`Good Morning, ${name}!`);
    } else if (currentTime < 18) {
      setWelcomeMessage(`Good Afternoon, ${name}!`);
    } else {
      setWelcomeMessage(`Good Evening, ${name}!`);
    }
    document.title = welcomeMessage;
  }, [name, welcomeMessage]);


  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetStarted = () => {
    navigate('/about/mission'); // Navigate to the Mission section
  };

  return (
    <HeroSection theme={theme}>
      <HeroContent>
        <h1>{welcomeMessage}</h1>
        <StyledParagraph theme={theme}>
          ExploreX: Embark on a journey of discovery with ExploreX, your ultimate companion in travel. Dive into a world of breathtaking landscapes, vibrant cultures, and exhilarating adventures. Whether you're seeking serene escapes or bustling cityscapes, ExploreX offers curated experiences that cater to every traveler's wanderlust. Our expertly crafted itineraries and insider tips ensure each trip is tailored to perfection. Join us and uncover the wonders of the world, one destination at a time, with ExploreX by your side.
        </StyledParagraph>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          theme={theme}
        />
        <h2>{time}</h2>
        <CallToActionButton onClick={handleGetStarted}>Get Started</CallToActionButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
