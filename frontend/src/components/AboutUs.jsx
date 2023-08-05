import React from 'react';
import { Link } from 'react-router-dom';


export const AboutUs = () => {
  return (
    <>
     <div className="container-xxl py-5 bg-dark hero-header6 mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ fontFamily: 'Metal Mania', fontSize: 80 }}>About Us </h1>
    
  </div>
</div>
<div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-start">
              <img
                className="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.1s"
                src="img/hp2.jpg"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "zoomIn",
                  width: "auto",
                  height: "100%",
                }}
                alt="Image 1"
              />
            </div>
            <div className="col-6 text-start">
              <img
                className="img-fluid rounded w-100 wow zoomIn photo"
                data-wow-delay="0.3s"
                src="img/hp3.jpg"
                style={{
                  marginTop: "25%",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "zoomIn",
                  width: "75%",
                  height: "auto",
                }}
                alt="Image 2"
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.5s"
                src="img/hp4.jpg"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "zoomIn",
                  width: "75%",
                  height: "auto",
                }}
                alt="Image 3"
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.7s"
                src="img/hp5.jpg"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "zoomIn",
                  width: "100%",
                  height: "auto",
                }}
                alt="Image 4"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            About Us
          </h5>
          <h1 className="mb-4" style={{ fontFamily: "Metal Mania", fontSize: 70 }}>
            Our Founders
            <img src="./img/logo_use1.png" alt="" style={{width:90, height:90}}/>
          </h1>
          <p className="mb-4" style={{ fontFamily: "Calibri", fontSize: 40 }}>
            - Shalvi Modi
          </p>
          <p className="mb-4" style={{ fontFamily: "Calibri", fontSize: 40 }}>
            - Rahil Patel
          </p>
          
        </div>
      </div>
</>
  );
};
