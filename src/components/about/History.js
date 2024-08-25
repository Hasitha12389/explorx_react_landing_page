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

const History = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Subheading>Our History</Subheading>
      <Paragraph>
        Founded in 2000, ExploreX has been a pioneer in the travel industry. Our journey began with a
        small team of passionate travelers who wanted to share their love for exploration with the world.
      </Paragraph>
      <Paragraph>
        Over the years, we have grown into a global travel platform, offering curated travel experiences
        to thousands of customers. Our commitment to quality and customer satisfaction has been the
        cornerstone of our success.
      </Paragraph>
    </Section>
  );
};

export default History;
