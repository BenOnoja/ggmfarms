import React from 'react';

function ContactUs() {
  const sectionStyle = {
    background: 'radial-gradient(circle, #4b0000, #800000, #4b0000)',
    padding: '20px', // Optional: Add some padding for better appearance
    color: 'white' // Optional: Change text color for better contrast
  };

  return (
    <div className="section" id="contact-us" style={sectionStyle}>
      <h2 style={{color:'white'}}>Contact Us</h2>
      <p style={{color:'white'}}>
        Reach out to us at GGM Farms Ltd for any inquiries regarding our products, services, or consultancy offerings.
        You can contact us via email at <strong>info@gfarms.com</strong> or call us at <strong>+123 456 78900</strong>.
      </p>
    </div>
  );
}

export default ContactUs;