import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductsServices.css';

function ProductsServices() {
  const navigate = useNavigate();

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };
const products = [
  {
    id: 1,
    name: 'Poultry',
    image: `${process.env.PUBLIC_URL}/pictures/poultry.jpeg`, // Use PUBLIC_URL for public folder assets
    description: 'Fresh and organic poultry products.',
    price: 'N3000',
  },
  {
    id: 2,
    name: 'Fish',
    image: `${process.env.PUBLIC_URL}/pictures/catfish.jpg`,
    description: 'Fresh fish from our farms.',
    price: 'N1500',
  },
  {
    id: 3,
    name: 'Eggs',
    image: `${process.env.PUBLIC_URL}/pictures/eggs.jpeg`,
    description: 'Healthy and sumptuous eggs.',
    price: 'N3000',
  },
  {
    id: 4,
    name: 'Palm Oil',
    image: `${process.env.PUBLIC_URL}/pictures/palmoil.jpeg`,
    description: 'We deal with quality palm oil',
  },
];



  return (
    <Card className="section" style={{ border: '10px solid #800000' }}>
      <Card.Body><h2>Our Products and Services</h2>
        <Carousel>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100"
                src={product.image}
                alt={product.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
              <div style={{color:'white', backgroundColor:'black',opacity:0.8}}>
                <h3>{product.name}</h3>
                <p>{product.description}</p></div>
                <Button style={{color:'white', backgroundColor:'#333'}} onClick={() => handleViewProduct(product)}>
                  View Product
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="see-more">
          <span>See more </span>
          <span>→</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductsServices;
