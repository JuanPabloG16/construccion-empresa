import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Cemento Portland',
    price: '$10.000',
    image: '/images/cemento.png',
    description: 'Cemento de alta calidad para construcciones robustas.',
  },
  {
    id: 2,
    name: 'Bloques de Concreto',
    price: '$5.000',
    image: '/images/bloques.png',
    description: 'Bloques duraderos y resistentes a las condiciones climáticas.',
  },
  // Agrega más productos aquí
];

const Products = () => {
  return (
    <div>
      <h2>Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
