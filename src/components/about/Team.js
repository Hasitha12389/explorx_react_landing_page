import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext'; // Ensure correct path to ThemeContext
import image1 from '../../images/bb5ebe72.jpg'; // Import your images
import image2 from '../../images/a2508248.jpg'; // Import your images

const Section = styled.section`
  margin-top: 20px;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')}; /* Ensure text color is visible against the background */
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const TeamMember = styled.div`
  flex: 1 1 30%;
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#555')};
  background-color: BlueViolet;
  border-radius: 8px;
  border: solid;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#fff')};
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Team = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Subheading>Our Team</Subheading>
      <TeamContainer>
        <TeamMember theme={theme}>
          <MemberImage src={image1} alt="Hasitha Navarathne" />
          <h3>Hasitha Navarathne</h3>
          <p>CEO & Founder</p>
        </TeamMember>
        <TeamMember theme={theme}>
          <MemberImage src={image2} alt="Chathura Samaliaarachchi" />
          <h3>Chathura Samaliaarachchi</h3>
          <p>Chief Operating Officer</p>
        </TeamMember>
      </TeamContainer>
    </Section>
  );
};

export default Team;
