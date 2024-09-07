import React from 'react';
import styled from 'styled-components';

// Estilos de la tarjeta de producto
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </Card>
  );
};

export default ProductCard;
