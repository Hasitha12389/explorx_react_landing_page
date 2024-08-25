import React from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import styled from 'styled-components';
import heroBackground from './images/jqy5c744.png';

const HeroSection = styled.div`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const FormContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Contact = () => {
  const { detailId } = useParams();

  return (
    <HeroSection>
      <FormContainer>
        {detailId ? <ContactDetail detailId={detailId} /> : <ContactForm />}
      </FormContainer>
    </HeroSection>
  );
};

export default Contact;
