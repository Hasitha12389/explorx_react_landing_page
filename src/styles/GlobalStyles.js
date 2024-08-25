import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'dark' ? '#000' : '#FFF')};
    color: ${(props) => (props.theme === 'dark' ? '#FFF' : '#000')};
    transition: background-color 0.3s, color 0.3s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0rem;
    padding: 0rem;
    padding-top: 1rem;
    box-sizing: border-box;
  }

  nav a {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s;
    padding: 1rem;

  nav a.active {
    font-weight: bold;
    padding: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 10px;
    padding: 0px;
  }

  input, textarea, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
    padding: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-group label {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: #61dafb;
  }

  .form-group .error {
    color: red;
    margin-top: 0.5rem;
  }

  form button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #61dafb;
    color: #fff;
    transition: background-color 0.3s;
    width: 15rem;
  }

  form button:hover {
    background-color: #21a1f1;
  }
`;

export default GlobalStyles;
