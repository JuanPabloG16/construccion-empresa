import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

// Asegúrate de importar los estilos del carrusel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importa las imágenes de la carpeta assets
import soldadorImg from '../assets/soldador.jpg';
import overolImg from '../assets/overol.jpg';
import trajeMedicoImg from '../assets/traje-medico.jpg';
import localImg1 from '../assets/local1.jpg'; // Imágenes del local
import localImg2 from '../assets/local2.jpg';

// Estilos del contenedor
const HomeContainer = styled.div`
  background-color: var(--color-bg-light);
  padding-top: 3rem;
`;

// Estilos del carrusel de productos
const ProductSlider = styled(Slider)`
  margin: 0 auto;
  width: 80%; /* Ajusta el tamaño del carrusel */
  
  .slick-slide img {
    width: 100%;
    height: 300px; /* Ajusta la altura para que las imágenes se vean bien */
    object-fit: cover; /* Hace que las imágenes cubran el espacio correctamente */
    border-radius: 10px;
  }

  .slick-prev, .slick-next {
    color: var(--color-accent);
  }
`;

// Estilos del sticker de precio
const PriceSticker = styled.div`
  display: inline-block;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
`;

// Estilos para el botón de CTA
const ButtonCTA = styled.button`
  background-color: var(--color-accent);
  color: var(--color-text-light);
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary);
  }
`;

// Estilos para las secciones
const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TextCenter = styled.div`
  text-align: center;
`;

// Estilos para las imágenes del local
const LocalImagesSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center; /* Centra las imágenes */
`;

const LocalImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilos para el contenedor de testimonios
const TestimonialSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

// Estilos del carrusel de testimonios
const TestimonialSlider = styled(Slider)`
  width: 100%;
  
  .slick-slide {
    display: flex;
    align-items: center; /* Centra verticalmente el contenido del slide */
    justify-content: center; /* Centra horizontalmente el contenido del slide */
    padding: 1rem;
  }

  .slick-prev, .slick-next {
    color: var(--color-accent);
  }
`;

// Estilos para el contenedor de cada testimonio
const TestimonialContainer = styled.div`
  width: 300px;
  background-color: var(--color-bg-light); /* Fondo blanco para el carrusel */
  border: 2px solid var(--color-primary); /* Borde para marcar el cuadro */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  color: var(--color-text-dark); /* Texto en negro para legibilidad */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TestimonialText = styled.p`
  margin: 0;
`;

// Datos de productos
const products = [
  { name: "Soldador Industrial", price: "$500", image: soldadorImg },
  { name: "Overol de Protección", price: "$80", image: overolImg },
  { name: "Traje Médico", price: "$150", image: trajeMedicoImg }
];

// Datos de testimonios
const testimonials = [
  "Excelente calidad de productos. Siempre cumplen con lo prometido y el servicio es impecable.",
  "Los productos son muy duraderos y confiables. Definitivamente los recomendaría.",
  "Gran variedad de productos y el servicio al cliente es excepcional."
];

const Home = () => {
  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <HomeContainer>
      <Section>
        <SectionTitle>Productos en Oferta</SectionTitle>
        <ProductSlider {...productSliderSettings}>
          {products.map((product, index) => (
            <div key={index}>
              <img src={product.image} alt={product.name} />
              <h3 style={{ textAlign: 'center', color: 'var(--color-primary)' }}>{product.name}</h3>
              <PriceSticker>{product.price}</PriceSticker>
            </div>
          ))}
        </ProductSlider>
      </Section>

      <Section>
        <SectionTitle>Imágenes del Local y Testimonios</SectionTitle>
        <TestimonialSection>
          <LocalImagesSection>
            <LocalImage src={localImg1} alt="Imagen del local 1" />
            <LocalImage src={localImg2} alt="Imagen del local 2" />
          </LocalImagesSection>
          
          <TestimonialContainer>
            <TestimonialSlider {...testimonialSliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <TestimonialText>{testimonial}</TestimonialText>
                </div>
              ))}
            </TestimonialSlider>
          </TestimonialContainer>
        </TestimonialSection>
      </Section>

      <Section>
        <SectionTitle>Nuevos Productos</SectionTitle>
        <TextCenter>
          <ButtonCTA>Ver Nuevos Productos</ButtonCTA>
        </TextCenter>
      </Section>

      <Section>
        <SectionTitle>Certificaciones</SectionTitle>
        <TextCenter>
          <p>Certificados en los más altos estándares de calidad y seguridad.</p>
        </TextCenter>
      </Section>
    </HomeContainer>
  );
};

export default Home;





