import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext'; // Ensure correct path to ThemeContext

const Section = styled.section`
  margin-top: 20px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')}; /* Ensure text color is visible against the background */
`;

const Subheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  font-size: 1.2rem;
`;

const Mission = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Subheading>Our Mission</Subheading>
      <Paragraph>
        At ExploreX, our mission is to inspire and enable travelers to explore the world. We strive to
        create unforgettable travel experiences by providing exceptional service, unique destinations,
        and a commitment to sustainability.
      </Paragraph>
      <Paragraph>
        We aim to connect people and cultures, fostering understanding and respect through travel.
        Our mission is guided by our core values of customer satisfaction, integrity, innovation, and
        sustainability.
      </Paragraph>
    </Section>
  );
};

export default Mission;
