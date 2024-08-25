import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const DetailContainer = styled.div`
  text-align: left;
  font-size: 1.2rem;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')}; // Change font color based on theme
`;

const ContactDetail = ({ detailId }) => {
  const { theme } = useContext(ThemeContext);

  const details = {
    '1': {
      address: 'Ritigala, Anuradhapura East, Middle West province, Sri Lanka ',
      phone: '+94 332 9439',
      email: 'explorex@123.com',
    },
  };

  const detail = details[detailId] || {};

  return (
    <DetailContainer theme={theme}>
      <h2>Contact Details</h2>
      <p>Company Address: {detail.address || 'N/A'}</p>
      <p>Phone: {detail.phone || 'N/A'}</p>
      <p>Email: {detail.email || 'N/A'}</p>
    </DetailContainer>
  );
};

export default ContactDetail;
