import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

export const Teams = () => {
  const eventId = useParams().eventId;
  const [teams, setteams] = useState([]);
  const getTeamsByEventId = async () => {
    const res = await axios.get(`team/get/${eventId}`);
    console.log(res.data.team);
    setteams(res.data.team);
  };
  useEffect(() => {
    getTeamsByEventId();
  }, []);

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
      <div style={{ marginTop: 120 }}>
        <div className="container-xxl pt-5 pb-3">
          <div className="container">
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
                TEAMS
              </h5>
              <h1 className="mb-5">OUR TEAMS</h1>
            </div>
            {teams?.map((team) => {
              return (
                <div className="row g-4">
                  <div
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.1s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="team-item text-center rounded overflow-hidden">
                      <div className="rounded-circle overflow-hidden m-4">
                        <img
                          className="img-fluid"
                          src="../../img/COBRA CHASERS.png"
                          alt=""
                        />
                      </div>
                      <h5 className="mb-0">{team.name}</h5>
                      
                      <div className="d-flex justify-content-center mt-3">
                        <Link
                          className="btn btn-square primary mx-5"
                          to={`/event/team/player/${eventId}/${team._id}`}
                        >
                          Learn More
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
