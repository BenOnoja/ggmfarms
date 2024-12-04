import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  // Handling when no product data is found (e.g., if navigated directly to this URL without state)
  if (!product) {
    return <div>No product details available. Please go back to the products page.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Back Button */}
      <Button 
        onClick={() => navigate(-1)} 
        style={{ 
          marginBottom: '20px', 
          backgroundColor: '#800000', 
          borderColor: '#800000',
          color: 'white'
        }}
      >
        ← Back
      </Button>
      
      {/* Product Detail Card */}
      <Card>
        <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          
          {/* Display price if available, otherwise show "Contact Us" button */}
          {product.price ? (
            <Card.Text style={{ fontWeight: 'bold', color: '#800000' }}>
              Price: {product.price}
            </Card.Text>
          ) : (
            <Button
              style={{
                backgroundColor: '#800000',
                borderColor: '#800000',
                color: 'white'
              }}
            >
              Contact Us
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductDetail;
