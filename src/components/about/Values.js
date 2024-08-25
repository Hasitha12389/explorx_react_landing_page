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

const item = styled.h4`
  line-height: 1.6;
  text-align: left;
`;

const Values = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Section theme={theme}>
      <Subheading>Our Values</Subheading>
      <Paragraph>
        At ExploreX, we believe in creating memorable travel experiences that are sustainable, inclusive,
        and enriching. Our core values guide everything we do and help us achieve our mission of making
        travel accessible and enjoyable for everyone.
      </Paragraph>
      <Paragraph>
        Our values include:
        <ul>
          <item>
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Innovation and Creativity</li>
          <li>Sustainability and Responsibility</li>
          <li>Passion for Travel</li>
          </item>
        </ul>
      </Paragraph>
    </Section>
  );
};

export default Values;
