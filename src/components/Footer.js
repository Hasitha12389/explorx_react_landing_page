import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const FooterContainer = styled.footer`
  color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#333')};
  background-color: ${(props) => (props.theme === 'dark' ? '#333' : '#f8f8f8')};
  padding: 5px;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  height: 85px;
  font-size: 0.8rem;

`;

const ContactInfo = styled.div`
  margin: 5px;
  padding-bottom: 5px;
  font-size: 0.9rem;
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <FooterContainer theme={theme}>
      <ContactInfo>
        <p>Hasitha Dananjaya Navarathne</p>
        <p>12 Pitipana South, Presannapura, Homagama</p>
      </ContactInfo>
      <p>&copy; {new Date().getFullYear()} Hasitha Dananjaya Navarathne. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
