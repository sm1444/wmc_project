// import React from "react";
// import { Corosol } from "./Corosol";

// export const WelcomeComponent = () => {
//   return (
    
//       <>
//       <Corosol />
    
//       <div className="row g-5 align-items-center">
//         <div className="col-lg-6">
//           <div className="row g-3">
//             <div className="col-6 text-start">
//               <img
//                 className="img-fluid rounded w-100 wow zoomIn"
//                 data-wow-delay="0.1s"
//                 src="img/hp2.jpg"
//                 style={{
//                   visibility: "visible",
//                   animationDelay: "0.1s",
//                   animationName: "zoomIn",
//                   width:400,
//                   height:300
//                 }}
//               />
//             </div>
//             <div className="col-6 text-start">
//               <img
//                 className="img-fluid rounded w-75 wow zoomIn photo"
//                 data-wow-delay="0.3s"
//                 src="img/hp3.jpg"
//                 style={{
//                   marginTop: "25%",
//                   visibility: "visible",
//                   animationDelay: "0.3s",
//                   animationName: "zoomIn",
//                 }}
//               />
//             </div>
//             <div className="col-6 text-end">
//               <img
//                 className="img-fluid rounded w-75 wow zoomIn"
//                 data-wow-delay="0.5s"
//                 src="img/hp4.jpg"
//                 style={{
//                   visibility: "visible",
//                   animationDelay: "0.5s",
//                   animationName: "zoomIn",
//                 }}
//               />
//             </div>
//             <div className="col-6 text-end">
//               <img
//                 className="img-fluid rounded w-100 wow zoomIn"
//                 data-wow-delay="0.7s"
//                 src="img/hp5.jpg"
//                 style={{
//                   visibility: "visible",
//                   animationDelay: "0.7s",
//                   animationName: "zoomIn",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <h5 className="section-title ff-secondary text-start text-primary fw-normal">
//             About Us
//           </h5>
//           <h1 className="mb-4" style={{fontFamily:'Metal Mania' , fontSize: 70}}>
//             Welcome to <i className="fa fa-utensils text-primary me-2" />
//             Quidditch Chronicles
//           </h1>
//           <p className="mb-4" style={{fontFamily:"Calibri" , fontSize:20}}>
//           Ready to dive into the heart-pounding action of Quidditch matches? Look no further! 
//           Our platform brings you all the excitement of the wizarding world’s favourite sport.
//           </p>
//           <p className="mb-4" style={{fontFamily:"Calibri" , fontSize:20}}>
//            Get ready to join the most thrilling magical sport experience in the wizarding world.
//           Book your spot now and cheer on your favorite teams as they chase the Golden Snitch!
//           </p>
//           <div className="row g-4 mb-4">
//             <div className="col-sm-6">
//               <div className="d-flex align-items-center border-start border-5 border-primary px-3">
//                 <h1
//                   className="flex-shrink-0 display-5 text-primary mb-0"
//                   data-toggle="counter-up"
//                 >
//                   2
//                 </h1>
//                 <div className="ps-4">

//                   <h6 className="text-uppercase mb-0">Exciting <br /> Tournaments</h6>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-6">
//               <div className="d-flex align-items-center border-start border-5 border-primary px-3">
//                 <h1
//                   className="flex-shrink-0 display-5 text-primary mb-0"
//                   data-toggle="counter-up"
//                 >
//                   10
//                 </h1>
//                 <div className="ps-4">
//                   <h6 className="text-uppercase mb-0">Amazing <br />Teams</h6>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <a className="btn btn-primary py-3 px-5 mt-2" href="">
//             Read More
//           </a>
//         </div>
//       </div>
    
//      </>

//   );
// };

import React from "react";
import { Corosol } from "./Corosol";

export const WelcomeComponent = () => {
  return (
    <>
      <Corosol />
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
            Welcome to {' '} Quidditch Chronicles {' '}
            <img src="./img/logo_use1.png" alt="" style={{width:90, height:90}}/>
          </h1>
          <p className="mb-4" style={{ fontFamily: "Calibri", fontSize: 20 }}>
            Ready to dive into the heart-pounding action of Quidditch matches? Look no further!
            Our platform brings you all the excitement of the wizarding world’s favourite sport.
          </p>
          <p className="mb-4" style={{ fontFamily: "Calibri", fontSize: 20 }}>
            Get ready to join the most thrilling magical sport experience.
            Book your spot now and cheer on your favorite teams as they chase the Golden Snitch!
          </p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  2
                </h1>
                <div className="ps-4">
                  <h6 className="text-uppercase mb-0">Exciting Tournaments</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  className="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  10
                </h1>
                <div className="ps-4">
                  <h6 className="text-uppercase mb-0">Amazing Teams</h6>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};