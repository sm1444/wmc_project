import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

export const EventDetail = () => {  

    const [event, setevent] = useState({})
    const id = useParams().id;
    const getEventDetail = async () => {

        const res = await axios.get(`event/get/${id}`);
        console.log(res.data.event);
        setevent(res.data.event);

    }
    useEffect(() => {    
      getEventDetail();
    }, [])
    
  return (
    <>
    <Helmet>
    <link href="../img/favicon.ico" rel="icon" />

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

    <link href="../../css/bootstrap.min.css" rel="stylesheet" />

    <link href="../../css/style.css" rel="stylesheet"></link>
  </Helmet>
    <div style={{marginTop:150}}>
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <h5 className="section-title ff-secondary text-start text-primary fw-normal">
          About Us
        </h5>
        <h1 className="mb-4">
          Welcome to <i className="fa fa-utensils text-primary me-2" />
          {event.name}
        </h1>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                15
              </h1>
              <div className="ps-4">
                <p className="mb-0">Years of</p>
                <h6 className="text-uppercase mb-0">Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                50
              </h1>
              <div className="ps-4">
                <p className="mb-0">Popular</p>
                <h6 className="text-uppercase mb-0">Master Chefs</h6>
              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-primary py-3 px-5 mt-2" to ={`/event/team/${id}`}>
          Teams
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};
