import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


/*
npx create-react-app my-second-landing-page
cd my-second-landing-page
npm install react-router-dom
npm install formik yup
npm install styled-components
npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
*/