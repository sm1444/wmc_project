import React from 'react';
import { Link } from 'react-router-dom';

export const HallOfFame = () => {
  return (
    <>
  
    <div className="container-xxl py-5 bg-dark hero-header4 mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ fontFamily: 'Metal Mania', fontSize: 80 }}>Hall Of Fame </h1>
    
  </div>
</div>
<div className="testimonial-container py-5">
  <div className="testimonial-header text-center">
    <h5 className="section-title ff-secondary text-center text-primary fw-normal">
      Testimonial
    </h5>
    <h1 className="mb-5">Our Clients Say!!!</h1>
  </div>

  <div className="testimonial-carousel">
    <div className="testimonial-item">
      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmod eos labore diam
      </p>
      <div className="testimonial-details">
        <img
          className="img-fluid rounded-circle"
          src="img/testimonial-1.jpg"
          alt="Client 1"
          style={{ width: 50, height: 50 }}
        />
        <div className="ps-3">
          <h5 className="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>
    <div className="testimonial-item">
      <i className="fa fa-quote-left fa-2x text-primary mb-3" />
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmod eos labore diam
      </p>
      <div className="testimonial-details">
        <img
          className="img-fluid rounded-circle"
          src="img/testimonial-2.jpg"
          alt="Client 2"
          style={{ width: 50, height: 50 }}
        />
        <div className="ps-3">
          <h5 className="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>
    {/* Add other testimonials as needed */}
  </div>
</div>



</>
  );
};
