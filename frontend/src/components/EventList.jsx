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
      <div
        className="text-center wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">
          Our Events
        </h5>
        <h1 className="mb-5">Explore Our Events</h1>
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
              <div className="service-item rounded pt-3">
                <div className="card border-0 shadow-sm">
                  <img
                    src="img/event1.png"
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{event.eventDate}</h5>
                    <p className="card-text">{event.venue}</p>
                    <Link
                      to={`/event/details/${event._id}`}
                      className="btn btn-primary"
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
