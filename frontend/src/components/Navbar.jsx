/*import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <Helmet>
        <link href="img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link href="../lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="../lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link
          href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0" style={{fontFamily:'Metal Mania' , fontSize:40}}>
        <i className="fa fa-utensils me-3" im/>
          Quidditch Chronicles
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */
      /*</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4" >
          <Link to ="/" className="nav-item nav-link active" style={{fontFamily:'Metal Mania' , fontSize: 20}}>
            Home
          </Link>
          <Link to="/eventlist" className="nav-item nav-link" style={{fontFamily:'Metal Mania' , fontSize:20}}>
            Events
          </Link>
          <a href="service.html" className="nav-item nav-link" style={{fontFamily:'Metal Mania', fontSize:20}}>
            Service
          </a>
          <a href="menu.html" className="nav-item nav-link" style={{fontFamily:'Metal Mania' , fontSize: 20}}>
            Menu
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{fontFamily:'Metal Mania' , fontSize: 20}}
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Our Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link" style={{fontFamily:'Metal Mania' , fontSize: 20}}>
            Contact
          </a>
        </div>
        <a href="" className="btn btn-primary py-2 px-4" style={{fontFamily:'Metal Mania' , fontSize: 25}}>
          Book Tickets
        </a>
      </div>
    </nav>
    </>
  );
};
*/

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [loginbutton, setloginbutton] = useState(localStorage.getItem("id") ? "Sign Out" : "Sign In");
  useEffect(() => {
    
    //var loginbutton = !localStorage.getItem("id") ? "Sign In" : "Sign Out";
    
  }, [loginbutton])
  
  const logout =()=>{
    localStorage.clear();
    window.location.reload();
  }
  
  return (
    <>
      <Helmet>
        <link href="img/favicon.ico" rel="icon" />

        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />

        <link href="../../lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="../../lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary m-0" style={{ fontFamily: 'Metal Mania', fontSize: 40 }}>
            <img src="./img/logo_use1.png" alt="" style={{width:60 , height:70, borderRadius:60}}/> {' '}
            Quidditch Chronicles
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="/" className="nav-item nav-link active" style={{ fontFamily: 'Metal Mania', fontSize: 20 }}>
              Home
            </Link>
            <Link to="/eventlist" className="nav-item nav-link" style={{ fontFamily: 'Metal Mania', fontSize: 20 }}>
              Events
            </Link>
            <a href="service.html" className="nav-item nav-link" style={{ fontFamily: 'Metal Mania', fontSize: 20 }}>
              Service
            </a>
            <a href="menu.html" className="nav-item nav-link" style={{ fontFamily: 'Metal Mania', fontSize: 20 }}>
              Menu
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ fontFamily: 'Metal Mania', fontSize: 20 }}
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="booking.html" className="dropdown-item">
                  Booking
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link" style={{ fontFamily: 'Metal Mania', fontSize: 20 }}>
              Contact
            </a>
          </div>
          {
            localStorage.getItem("id") ? <button onClick={()=>{logout()}} className="btn btn-primary py-2 px-4" style={{ fontFamily: 'Metal Mania', fontSize: 25 }}>{loginbutton}</button> : <Link to="/login" className="btn btn-primary py-2 px-4" style={{ fontFamily: 'Metal Mania', fontSize: 25 }}>{loginbutton}</Link>
          }
          {/* <Link to ="/adduser" className="btn btn-primary py-2 px-4" style={{ fontFamily: 'Metal Mania', fontSize: 25 }}>
            {loginbutton}
          </Link> */}
        </div>
      </nav>
    </>
  );
};