import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #1C3D5A; /* Azul Marino */
    --color-secondary: #3D3D3D; /* Gris Oscuro */
    --color-accent: #C0392B; /* Rojo */
    --color-bg-light: #E0E0E0; /* Gris Claro */
    --color-text-light: #FFFFFF; /* Blanco */
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: var(--color-bg-light);
    color: var(--color-secondary);
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    color: var(--color-primary);
  }

  a {
    color: var(--color-secondary);
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--color-accent);
  }

  button {
    background-color: var(--color-accent);
    color: var(--color-text-light);
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: var(--color-primary);
  }
`;

export default GlobalStyle;
