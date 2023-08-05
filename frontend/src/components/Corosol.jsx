/*import React from "react";

export const Corosol = () => {
  return (
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft" style={{fontFamily:'Metal Mania' , fontSize: 80}}>
                Fly High 
                <br />
                and <br /> Chase Glory
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2" style={{fontFamily:"Calibri" , fontSize:20}}>
              Embark on a thrilling journey into the enchanting realm of Quidditch, <br />
              where broomsticks defy gravity and heroes are forged through <br /> heart-pounding battles of skill and strategy.
              </p>
              <a
                href=""
                className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                style={{fontFamily:'Metal Mania' , fontSize: 20}}
              >
                Book Your Tickets Now
              </a>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="spinner" src="img/logo.png" alt="Photo"
               />
            </div>
          </div>
        </div>
      </div>
     
  );
};
*/

import React from "react";
import { Link } from "react-router-dom";

export const Corosol = () => {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              className="display-3 text-white animated slideInLeft"
              style={{ fontFamily: "Metal Mania", fontSize: 80 }}
            >
              Fly High
              <br />
              and <br /> Chase Glory
            </h1>
            <p
              className="text-white animated slideInLeft mb-4 pb-2"
              style={{ fontFamily: "Calibri", fontSize: 20 }}
            >
              Embark on a thrilling journey into the enchanting realm of
              Quidditch, <br />
              where broomsticks defy gravity and heroes are forged through{" "}
              <br /> heart-pounding battles of skill and strategy.
            </p>
            <Link
              to="/genrerate-ticket"
              className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
              style={{ fontFamily: "Metal Mania", fontSize: 20 }}
            >
              Book Your Tickets Now
            </Link>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="spinner" src="img/logo.png" alt="Photo" />
          </div>
        </div>
      </div>
    </div>
  );
};
