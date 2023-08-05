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
    {/* <Helmet>
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
  </Helmet> */}
  <div className="container-xxl py-5 bg-dark hero-header5 mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ fontFamily: 'Metal Mania', fontSize: 80 }}>Quidditch Events </h1>
    
  </div>
</div>
    <div style={{marginTop:50 , alignItems:'center'}}>
    <div className="row g-5 align-items-center">
      <div className="col-lg-8">
        
        <h1 className="mb-4"style={{fontFamily:'calibri',fontStyle:'bold' , fontSize:50}}>
          Welcome to 
           Quidditch <br /> Premier league <img src="../../img/logo_use1.png" alt="" style={{width:60 , height:70, borderRadius:60}}/>
        </h1>
        <p className="mb-4"style={{fontFamily:'calibri',fontStyle:'bold' , fontSize:20}}>
        The Quidditch Premier League enchants fans with its magical athleticism, intense rivalries, and <br /> captivating matches. 
        Players from diverse backgrounds unite, carrying the sport's legacy forward <br /> in the heart of wizarding culture.
        </p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                6
              </h1>
              <div className="ps-4">
                <p className="mb-0">Amazing</p>
                <h6 className="text-uppercase mb-0">Teams</h6>
              </div>
            </div>
          </div>
           <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                6
              </h1>
              <div className="ps-4">
                <p className="mb-0">Mesmerizing</p>
                <h6 className="text-uppercase mb-0">Stadiums</h6>
              </div>
            </div>
          </div> 
        </div>
        <Link className="btn btn-primary py-3 px-5 mt-2" style={{marginLeft:200}} to ={`/event/team/${id}`}>
          Teams
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};
