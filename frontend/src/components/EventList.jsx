import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EventList = () => {
  const [events, setevents] = useState([]);
  const getEvents = async () => {
    try{
    const res = await axios.get("event/get");
    console.log(res.data.event);
    setevents(res.data.event);
    }catch(err){
      alert("loading...")
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <>
    <div className="container-xxl py-5 bg-dark hero-header3 mb-5">
  <div className="container text-center my-5 pt-5 pb-4">
    <h1 className="display-3 text-white mb-3 animated slideInDown" style={{ fontFamily: 'Metal Mania', fontSize: 80 }}>About Us</h1>
    
  </div>
</div>

      <div
        className="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <h5 className="section-title ff-secondary text-center text-primary fw-normal" style={{fontSize:35}}>
          Our Events
        </h5>
        <h1 className="mb-5" style={{fontFamily:'calibri', font:'bold' , fontSize:50}}>EPIC QUIDDITCH SHOWDOWN</h1>
      </div>

      <div className="row g-4">
        <div
          className="col-lg-3 col-sm-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        >
          {events?.map((event) => {
            return (
              <div className="service-item rounded pt-3" style={{width:500 , justifyContent:'center'}}>
                <div className="card border-0 shadow-sm">
                  <img
                    src="./img/qpl2_mod.png"
                    className="card-img-top rounded-0"
                    alt="..."
                    style={{width:500, height:500}}
                  />
                  <div className="card-body">
                    <h5 className="card-title" >{event.name}</h5>
                    <p className="card-text justify-content-center">{event.venue}</p>
                    <Link
                      to={`/event/details/${event._id}`}
                      className="btn btn-primary" style={{marginLeft:150}} 
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div> 
            );
          })}
        </div>
      </div>
    </>
  );
};
