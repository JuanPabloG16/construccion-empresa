import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos del header
const Nav = styled.nav`
  background-color: var(--color-primary);
  padding: 1rem 2rem;
  color: var(--color-text-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-text-light);
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-text-light);
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-accent);
    border-radius: 5px;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>Empresa de Construcción</Logo>
      <Menu>
        <StyledLink to="/">Inicio</StyledLink>
        <StyledLink to="/products">Productos</StyledLink>
        <StyledLink to="/about-us">Sobre Nosotros</StyledLink>
        <StyledLink to="/contact">Contacto</StyledLink>
      </Menu>
    </Nav>
  );
};

export default Header;
