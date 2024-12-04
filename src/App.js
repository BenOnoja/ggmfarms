import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route for navigation
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AboutUs from './components/AboutUs';
import ProductsServices from './components/ProductsServices';
import WhatsNew from './components/WhatsNew';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom styles for smooth scrolling and responsiveness
import logo from './logo.jpg';

function App() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Router>
      <div className="app-container">
        {/* Collapsible Navbar */}
        <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
          <Container>
            <Navbar.Brand style={{ fontStyle: 'bold', fontSize: 17 }}>
              <img
                src={logo}
                alt="GGM Farms Logo"
                width="40"
                height="40"
                className="rounded-circle me-2" // Bootstrap class for rounded image and margin
              />
              Great Grace and Mercy Farms Ltd
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} smooth to="#about-us" onClick={closeMenu}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} smooth to="#products-services" onClick={closeMenu}>
                  Our Products & Services
                </Nav.Link>
                <Nav.Link as={Link} smooth to="#whats-new" onClick={closeMenu}>
                  What's New
                </Nav.Link>
                <Nav.Link as={Link} smooth to="#contact-us" onClick={closeMenu}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <main>
          <Routes>
            {/* Define routes for different sections */}
            <Route path="/" element={
              <>
                <section id="about-us">
                  <AboutUs />
                </section>
                <section id="products-services">
                  <ProductsServices />
                </section>
                <section id="whats-new">
                  <WhatsNew />
                </section>
              </>
            } />
            
            {/* Route for product details */}
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>

        {/* Footer with Contact Us */}
        <footer>
          <ContactUs />
          <Footer />
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
